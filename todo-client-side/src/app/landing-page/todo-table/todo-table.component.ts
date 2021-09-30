import { Component, OnInit, ViewChild } from '@angular/core';
import {TodoData, TodoService} from "../../app_state/services/todo.service";
import {map, takeUntil, tap} from "rxjs/operators";
import {Todo} from "../../app_state/entity/todo";
import {PageEvent} from "@angular/material/paginator";
import {Status} from "../../app_state/entity/status";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../services/shared.service";
import {Observable, Subject, Subscription} from "rxjs";
import * as moment from 'moment';
import {TableService} from "../../services/table.service";
import {TableDataService} from "../../services/table-data.service";
import {UpdateFormService} from "../../services/update-form.service";
import {TodoDeleteConfirmationService} from "../../services/todo-delete-confirmation.service";
//ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from "../../app_state";
import {User} from "../../app_state/entity/user";
import {Category} from "../../app_state/entity/category";
//import {MatSort} from "@angular/material/sort";



@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

  dataSource!: TodoData;
  displayedColumns: string[] = ['id', 'title', 'description', 'due', 'Category', 'Status','Action'];
  pageEvent!: PageEvent;
  formSubmitEventSubscription!: Subscription;
  tableData!:Todo;
  categoryList$: any;
  statusList$: any;
  user!: User;
  loading = false;


  destroy$: Subject<boolean> = new Subject<boolean>();

  searchValueTitle: string = '';
  searchValueCategoryID: string = '';
  searchValueStatusID: string = '';
  searchValueFrom: string = '';
  searchValueTo: string = '';

  constructor(
    private todoService: TodoService,
    private sharedService:SharedService,
    private tableService:TableService,
    private tableDataService: TableDataService,
    private updateFormService: UpdateFormService,
    private todoDeleteConfirmationService: TodoDeleteConfirmationService,
    private readonly store: Store
    ) {
    this.formSubmitEventSubscription = this.tableService.getFormSubmitSubject()
      .subscribe(() => {this.findAll()});
    this.store.select(fromRoot.getLoggedInUser)
      .pipe(takeUntil(this.destroy$),)
      .subscribe(data => this.user = data.user);
    this.store.select(fromRoot.getStatusList)
      .pipe(takeUntil(this.destroy$),)
      .subscribe(data => this.statusList$ = data.statusList);
    this.store.select(fromRoot.getCategoryList)
      .pipe(takeUntil(this.destroy$),)
      .subscribe(data => this.categoryList$ = data.categoryList);
  }

  ngOnInit(): void {
    this.findAll();
    this.tableDataService.currentValue.subscribe(tableData => this.tableData = tableData);
  }

   findAll(){
    this.todoService.findAll(
      1,
      10,
      this.user.username!,
      this.searchValueTitle,
      this.searchValueStatusID,
      this.searchValueCategoryID,
      this.searchValueFrom,
      this.searchValueTo
      ).pipe(
      map((todoData: TodoData) => this.dataSource = todoData)
    ).subscribe();
  }

  onPaginateEvent(event: PageEvent){
    let page = event.pageIndex+1;
    let size = event.pageSize;
    this.todoService.findAll(
      page,
      size,
      this.user.username!,
      this.searchValueTitle,
      this.searchValueStatusID,
      this.searchValueCategoryID,
      this.searchValueFrom,
      this.searchValueTo
    ).pipe(
      map((todoData: TodoData) => this.dataSource = todoData)
    ).subscribe()
  }

  getDueDate(date: string): string{
    return moment(date).format('hh:mm:ss a | MMMM Do dddd YYYY');
  }

  changeTodoStatus(data:Todo,status:Status){
    data.status = status;
    try {
      this.todoService.todoUpdate(data)
        .subscribe(() => {this.sharedService.sendNotificationSuccessEvent()})
    }catch (e) {
      this.sharedService.sendNotificationErrorEvent();
    }
  }

  markAsComplete(data: Todo){
    let completed:  Status = new Status(4, 'Completed');
    this.changeTodoStatus(data,completed);
  }

  postponeTask(data: Todo){
    let postponed:  Status = new Status(2, 'Postponed');
    this.changeTodoStatus(data,postponed);
  }

  cancelTask(data: Todo){
    let cancelled:  Status = new Status(3, 'Cancelled');
    this.changeTodoStatus(data,cancelled);
  }

  setDefaultDate(data: Todo){
    this.tableDataService.getValue(data);
    this.updateFormService.sendUpdateFormDisplayEventSubject();
  }

  Delete(data: Todo){
    this.tableDataService.getValue(data);
    this.todoDeleteConfirmationService.sendDeleteConfirmationSubject();
  }

  resetSearchForm(){
    this.searchValueTitle = '';
    this.searchValueCategoryID = '';
    this.searchValueStatusID = '';
    this.searchValueFrom = '';
    this.searchValueTo = '';
    this.findAll();
  }

}

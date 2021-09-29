import { Component, OnInit, ViewChild } from '@angular/core';
import {TodoData, TodoService} from "../todo/todo.service";
import {map, tap} from "rxjs/operators";
import {Todo} from "../todo/entity/todo";
import {PageEvent} from "@angular/material/paginator";
import {Status} from "../todo/entity/status";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../services/shared.service";
import { Subscription} from "rxjs";
import * as moment from 'moment';
import {TableService} from "../../services/table.service";
import {TableDataService} from "../../services/table-data.service";
import {UpdateFormService} from "../../services/update-form.service";
import {TodoDeleteConfirmationService} from "../../services/todo-delete-confirmation.service";
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
  dueDate!: string;
  formSubmitEventSubscription!: Subscription;
  tableData!:Todo;
  todoCategories!: any;
  todoStatuses!: any;

  searchValueTitle: string = '';
  searchValueCategoryID: string = '';
  searchValueStatusID: string = '';
  searchValueFrom: string = '';
  searchValueTo: string = '';

  constructor(
    private todoService: TodoService,
    private http: HttpClient,
    private sharedService:SharedService,
    private tableService:TableService,
    private tableDataService: TableDataService,
    private updateFormService: UpdateFormService,
    private todoDeleteConfirmationService: TodoDeleteConfirmationService,
    ) {
    this.formSubmitEventSubscription = this.tableService.getFormSubmitSubject().subscribe(() => {
      this.findAll();
    });
  }

  ngOnInit(): void {
    this.findAll();
    this.tableDataService.currentValue.subscribe(tableData => this.tableData = tableData);
    this.getTodoCategory();
    this.getTodoStatuses();
  }

  findAll(){
    this.todoService.findAll(
      1,
      10,
      localStorage.getItem('username')!,
      this.searchValueTitle,
      this.searchValueStatusID,
      this.searchValueCategoryID,
      this.searchValueFrom,
      this.searchValueTo
      ).pipe(
      map((todoData: TodoData) => this.dataSource = todoData)
    ).subscribe()
  }

  getTodoCategory(){
    this.todoCategories = this.todoService.getCategoryList();
  }

  getTodoStatuses(){
    this.todoStatuses = this.todoService.getStatusList();
  }


  onPaginateEvent(event: PageEvent){
    let page = event.pageIndex+1;
    let size = event.pageSize;
    this.todoService.findAll(
      page,
      size,
      localStorage.getItem('username')!,
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
      this.todoService.todoUpdate(data).subscribe(
        () => {this.sharedService.sendNotificationSuccessEvent()}
      )
    }catch (e) {
      this.sharedService.sendNotificationErrorEvent();
      console.log(e)
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

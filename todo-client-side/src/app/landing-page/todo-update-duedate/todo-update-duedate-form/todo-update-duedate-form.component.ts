import { Component, OnInit } from '@angular/core';
import {Todo} from "../../todo/entity/todo";
import {TableDataService} from "../../../services/table-data.service";
import * as moment from 'moment';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../../services/shared.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {TableService} from "../../../services/table.service";

@Component({
  selector: 'app-todo-update-duedate-form',
  templateUrl: './todo-update-duedate-form.component.html',
  styleUrls: ['./todo-update-duedate-form.component.css']
})
export class TodoUpdateDuedateFormComponent implements OnInit {

  tableData!:Todo;
  dueDate!:any;
  ROOT_URL = 'http://localhost:1000';
  dateTimeNow!: string;

  constructor(
    private tableDataService: TableDataService,
    private formBuilder: FormBuilder,
    private sharedService:SharedService,
    private http: HttpClient,
    public dialog: MatDialog,
    private tableService: TableService,
  ) { }

  updateDueDateForm = new FormGroup({
    newDueDate: new FormControl(null,[Validators.required]),
  })

  ngOnInit(): void {
    this.dateTimeNow = moment().format('YYYY-MM-DDTHH:MM');
    this.tableDataService.currentValue.subscribe(tableData => this.tableData = tableData)
    this.updateDueDateForm = this.formBuilder.group({
      newDueDate : ''
    });
    this.dueDate = this.tableData.due;
  }

  update(){
    const formData = this.updateDueDateForm.value;
    let updatedTodo = new Todo(
      this.tableData.id,
      this.tableData.title,
      this.tableData.description,
      formData.newDueDate,
      this.tableData.email,
      this.tableData.category,
      this.tableData.status,
    );
    //console.log(updatedTodo)

    try {
      this.http.patch(`${this.ROOT_URL}/todo/${updatedTodo.id}`,updatedTodo).subscribe(() => {
        this.tableService.sendFormSubmitSubject();
        this.sharedService.sendNotificationSuccessEvent();
      })
    }catch (error){
      this.sharedService.sendNotificationErrorEvent();
      //this.dialog.closeAll()
    }
    this.dialog.closeAll();
  }

  getTodayDateTime(): string{
    let date = new Date();
    return date.toISOString();
  }

  getDueDate(date: string): string{
    return moment(date).format('MMMM Do dddd YYYY - hh:mm:ss a');
  }



}

import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {SharedService} from "../../../services/shared.service";
import {TableService} from "../../../services/table.service";
import * as moment from 'moment';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  ROOT_URL = 'http://localhost:1000';
  //loading = false;
  //success = false;
  todoCategories!: any;
  dateTimeNow!: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    private sharedService:SharedService,
    private tableService: TableService
  ) {}

  todoForm = new FormGroup({
    title: new FormControl(null,[Validators.maxLength(25),Validators.required]),
    description: new FormControl(null,[Validators.maxLength(75)]),
    due: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
  })

  ngOnInit(): void {
    this.dateTimeNow = moment().format('YYYY-MM-DDTHH:MM');
    this.todoForm = this.formBuilder.group({
      title : '',
      description : '',
      due : '',
      category : '',
      email: localStorage.getItem('username')
    });
    this.getTodoCategory();
  }

  getTodoCategory(){
    this.todoCategories = this.http.get(this.ROOT_URL+'/category')
  }

  async submit(){
   // this.loading = true;
    const formData = this.todoForm.value;
    try {
      this.http.post(this.ROOT_URL+'/todo',formData).subscribe(() => {
          this.tableService.sendFormSubmitSubject();
          this.sharedService.sendNotificationSuccessEvent();
      })
      //this.success = true;
    }catch (error){
      //this.success = false;
      this.sharedService.sendNotificationErrorEvent();
    }
    this.dialog.closeAll()
  }

}

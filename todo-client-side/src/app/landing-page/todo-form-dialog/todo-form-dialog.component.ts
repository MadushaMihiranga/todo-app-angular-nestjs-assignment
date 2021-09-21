import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TodoFormComponent} from "./todo-form/todo-form.component";

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.css']
})
export class TodoFormDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openUpdateDueDateForm() {
    this.dialog.open(TodoFormComponent)
  }

  closeDialog(){
    this.dialog.closeAll();
  }

}


import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TodoUpdateDuedateFormComponent} from "./todo-update-duedate-form/todo-update-duedate-form.component";
import {UpdateFormService} from "../../services/update-form.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-todo-update-duedate',
  templateUrl: './todo-update-duedate.component.html',
  styleUrls: ['./todo-update-duedate.component.css']
})
export class TodoUpdateDuedateComponent implements OnInit {

  displayUpdateFormEventSubscription!: Subscription;

  constructor(
    public dialog: MatDialog,
    private updateFormService: UpdateFormService
  ) {
    this.displayUpdateFormEventSubscription = this.updateFormService.getUpdateFormDisplayEventSubject().subscribe(() => {
      this.openDueDateUpdateForm();
    });
  }

  ngOnInit(): void {}

  openDueDateUpdateForm() {
    this.dialog.open(TodoUpdateDuedateFormComponent);
  }

}

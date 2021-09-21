import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TodoDeleteConfirmationContentComponent} from "./todo-delete-confirmation-content/todo-delete-confirmation-content.component";
import {Subscription} from "rxjs";
import {UpdateFormService} from "../../services/update-form.service";
import {TodoDeleteConfirmationService} from "../../services/todo-delete-confirmation.service";

@Component({
  selector: 'app-todo-delete-confirmation',
  templateUrl: './todo-delete-confirmation.component.html',
  styleUrls: ['./todo-delete-confirmation.component.css']
})
export class TodoDeleteConfirmationComponent implements OnInit {

  displayDeleteConfirmationSubscription!: Subscription;


  constructor(
    public dialog: MatDialog,
    private todoDeleteConfirmationService: TodoDeleteConfirmationService,
    ) {

    this.displayDeleteConfirmationSubscription = this.todoDeleteConfirmationService.getDeleteConfirmationSubject().subscribe(() => {
      this.openDeleteConfirmation();
    });
  }

  ngOnInit(): void {
  }

  openDeleteConfirmation() {
    this.dialog.open(TodoDeleteConfirmationContentComponent);
  }

}


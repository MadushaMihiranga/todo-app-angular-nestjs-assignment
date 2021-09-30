import { Component, OnInit } from '@angular/core';
import {TableDataService} from "../../../services/table-data.service";
import {MatDialog} from "@angular/material/dialog";
import {SharedService} from "../../../services/shared.service";
import {TableService} from "../../../services/table.service";
import {TodoService} from "../../../app_state/services/todo.service";
import {Todo} from "../../../app_state/entity/todo";

@Component({
  selector: 'app-todo-delete-confirmation-content',
  templateUrl: './todo-delete-confirmation-content.component.html',
  styleUrls: ['./todo-delete-confirmation-content.component.css']
})
export class TodoDeleteConfirmationContentComponent implements OnInit {

  dataToBeDelete!: Todo;

  constructor(
    private todoService: TodoService,
    private tableDataService: TableDataService,
    public dialog: MatDialog,
    private sharedService:SharedService,
    private tableService: TableService,
  ) { }

  ngOnInit(): void {
    this.tableDataService.currentValue.subscribe(dataToBeDelete => this.dataToBeDelete = dataToBeDelete);
  }

  submitDelete(){
    try {
      this.todoService.todoDelete(this.dataToBeDelete).subscribe(() => {
        this.tableService.sendFormSubmitSubject();
        this.sharedService.sendNotificationSuccessEvent();
      } )
    }catch (e) {
      console.log(e)
      this.sharedService.sendNotificationErrorEvent();
    }
    this.dialog.closeAll()
  }

  closeDeleteConfirmation(){
    this.dialog.closeAll()
  }

}

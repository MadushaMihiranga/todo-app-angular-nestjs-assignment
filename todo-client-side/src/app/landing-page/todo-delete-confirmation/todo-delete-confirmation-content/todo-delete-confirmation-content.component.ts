import { Component, OnInit } from '@angular/core';
import {TableDataService} from "../../../services/table-data.service";
import {Todo} from "../../../entity/todo";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../../services/shared.service";
import {TableService} from "../../../services/table.service";

@Component({
  selector: 'app-todo-delete-confirmation-content',
  templateUrl: './todo-delete-confirmation-content.component.html',
  styleUrls: ['./todo-delete-confirmation-content.component.css']
})
export class TodoDeleteConfirmationContentComponent implements OnInit {

  dataToBeDelete!: Todo;
  ROOT_URL = 'http://localhost:1000';

  constructor(
    private tableDataService: TableDataService,
    public dialog: MatDialog,
    private http: HttpClient,
    private sharedService:SharedService,
    private tableService: TableService,
    ) { }

  ngOnInit(): void {
    this.tableDataService.currentValue.subscribe(dataToBeDelete => this.dataToBeDelete = dataToBeDelete);
  }

  submitDelete(){
    try {
      this.http.delete(`${this.ROOT_URL}/todo/${this.dataToBeDelete.id}`).subscribe(()=>{
        this.tableService.sendFormSubmitSubject();
        this.sharedService.sendNotificationSuccessEvent();
      })
    }catch (error){
      this.sharedService.sendNotificationErrorEvent();
    }
    this.dialog.closeAll();
  }

  closeDeleteConfirmation(){
    this.dialog.closeAll()
  }

}

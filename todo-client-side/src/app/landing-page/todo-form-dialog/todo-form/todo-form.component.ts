import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SharedService} from "../../../services/shared.service";
import {TableService} from "../../../services/table.service";
import * as moment from 'moment';
import {TodoService} from "../../../app_state/services/todo.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../app_state";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {User} from "../../../app_state/entity/user";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  categoryList$!: any;
  dateTimeNow!: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  user!: User;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private sharedService:SharedService,
    private tableService: TableService,
    private readonly store: Store
  ) {
    this.store.select(fromRoot.getCategoryList)
      .pipe(takeUntil(this.destroy$),)
      .subscribe(data => this.categoryList$ = data.categoryList);

    this.store.select(fromRoot.getLoggedInUser)
      .pipe(takeUntil(this.destroy$),)
      .subscribe(data => this.user = data.user);
  }

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
      email: this.user.username
    });
    console.log(this.user.username)
  }

  async submit(){
    const formData = this.todoForm.value;
    try {
      this.todoService.todoCreate(formData).subscribe(() => {
        this.tableService.sendFormSubmitSubject();
        this.sharedService.sendNotificationSuccessEvent();
      })
    }catch (e) {
      this.sharedService.sendNotificationErrorEvent();
    }
    this.dialog.closeAll()
  }

}

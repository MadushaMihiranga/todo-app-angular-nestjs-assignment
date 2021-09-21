import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SharedService} from "../../services/shared.service";
import { Subscription} from "rxjs";


@Component({
  selector: 'app-todo-notifications',
  templateUrl: './todo-notifications.component.html',
  styleUrls: ['./todo-notifications.component.css']
})
export class TodoNotificationsComponent implements OnInit {

  notificationSuccessEventSubscription!: Subscription;
  notificationErrorEventSubscription!: Subscription;


  ngOnInit(): void {
  }

  constructor(
    private notification: MatSnackBar,
    private sharedService: SharedService
  ) {
    this.notificationSuccessEventSubscription = this.sharedService.getNotificationSuccessEvent().subscribe(() => {
      this.displaySuccessNotification();
    });
    this.notificationErrorEventSubscription = this.sharedService.getNotificationErrorEvent().subscribe(() => {
      this.displayErrorNotification();
    })
  }

  displaySuccessNotification() {
    this.notification.open('✔️ Saved Successfully','Close',{duration:3000});
  }

  displayErrorNotification() {
    this.notification.open('❗️ Failed','Close');
  }

}

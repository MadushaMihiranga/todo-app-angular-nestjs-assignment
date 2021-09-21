import { Injectable } from '@angular/core';
import {Observable,Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class SharedService {
  private successNotificationEventSubject = new Subject<any>();
  private errorNotificationEventSubject = new Subject<any>();

  sendNotificationSuccessEvent(){
    this.successNotificationEventSubject.next();
  }

  sendNotificationErrorEvent(){
    this.errorNotificationEventSubject.next();
  }

  getNotificationSuccessEvent():Observable<any>{
    return this.successNotificationEventSubject.asObservable()
  }

  getNotificationErrorEvent():Observable<any>{
    return this.errorNotificationEventSubject.asObservable()
  }


}

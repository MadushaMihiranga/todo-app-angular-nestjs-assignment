import { Injectable } from '@angular/core';
import {Observable,Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TodoDeleteConfirmationService {
  private displayDeleteConfirmationSubject = new Subject<any>();

  sendDeleteConfirmationSubject(){
    this.displayDeleteConfirmationSubject.next();
  }

  getDeleteConfirmationSubject(): Observable<any>{
    return this.displayDeleteConfirmationSubject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import {Observable,Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private formSubmitSubject = new Subject<any>();

  sendFormSubmitSubject(){
    this.formSubmitSubject.next();
  }

  getFormSubmitSubject():Observable<any>{
    return this.formSubmitSubject.asObservable();
  }

}

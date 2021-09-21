import { Injectable } from '@angular/core';
import {Observable,Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UpdateFormService {

  private updateFormDisplayEventSubject = new Subject<any>();

  sendUpdateFormDisplayEventSubject(){
    this.updateFormDisplayEventSubject.next();
  }

  getUpdateFormDisplayEventSubject(): Observable<any>{
    return this.updateFormDisplayEventSubject.asObservable();
  }



}

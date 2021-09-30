import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Todo} from "../app_state/entity/todo";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {


  private tableDataSource = new BehaviorSubject<Todo>(new Todo());
  currentValue = this.tableDataSource.asObservable();

  getValue(data: Todo){
    this.tableDataSource.next(data);
  }

  constructor() { }
}

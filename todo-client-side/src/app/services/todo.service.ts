import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Todo} from "../entity/todo";
import {catchError, map, tap} from "rxjs/operators";

export interface  TodoData{
  items: Todo[],
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  ROOT_URL = 'http://localhost:1000';
  constructor(private http: HttpClient) { }

  findAll(
    page: number,
    size: number,
    email: string,
    title: string = '',
    status: string = '',
    category: string = '',
    from: string = '' ,
    to: string = ''
  ): Observable<TodoData>{
    let params = new HttpParams()
      .set('email',email)
      .set('title',title)
      .set('status',status)
      .set('category',category)
      .set('from',from)
      .set('to',to)
      .set('limit',size)
      .set('page',page);
    return this.http.get<TodoData>(this.ROOT_URL+'/todo/findall',{params})
      .pipe(
        map((todoData: TodoData) => todoData),
        catchError(err => throwError(err))
      )
  }

}

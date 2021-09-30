import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TodoService } from "../services/todo.service";
import * as todoActions from '../actions';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.getTodos),
      exhaustMap(action =>
        this.todoService.findAll(
          action.page,action.size,action.email,action.title,action.status,action.category,action.from,action.to
        ).pipe(
          map(response => {
            //console.log("response:::", response)
            return todoActions.getTodosSuccess({response})
          }),
          catchError((error: any) => of(todoActions.getTodosFailure(error))))
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.createTodo),
      exhaustMap(action =>
        this.todoService.todoCreate(action.todo).pipe(
          map(response => todoActions.createTodoSuccess(response)),
          catchError((error: any) => of(todoActions.createTodoFailure(error))))
      )
    )
  );


  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.deleteTodo),
      exhaustMap(action => this.todoService.todoDelete(action.todo).pipe(
        map(response => todoActions.deleteTodoSuccess(response)),
        catchError((error: any) => of(todoActions.deleteTodoFailure(error))))
      )
    )
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.editTodo),
      exhaustMap(action =>
        this.todoService.todoUpdate(action.todo).pipe(
          map(response => todoActions.editTodoSuccess(response)),
          catchError((error: any) => of(todoActions.editTodoFailure(error))))
      )
    )
  );

  getCategoryList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.getCategory),
      exhaustMap(action=>
        this.todoService.getCategoryList().pipe(
          map(response => todoActions.getCategorySuccess({response})),
          catchError((error: any) => of(todoActions.getCategoryFailure(error)))
        )
      )

    )
  )

  getStatusList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.getStatus),
      exhaustMap(action=>
        this.todoService.getStatusList().pipe(
          map(response => todoActions.getStatusSuccess({response})),
          catchError((error: any) => of(todoActions.getStatusFailure(error)))
        )
      )

    )
  )

}

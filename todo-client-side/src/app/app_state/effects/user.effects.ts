import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, exhaustMap, catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from "../services/user.service";
import * as userActions from '../actions';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

/*  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      exhaustMap(action =>
        this.userService.login(action.user).pipe(
          map(response => userActions.loginSuccess(response)),
          catchError((error: any) => of(userActions.loginFailure(error))))
      )
    )
  );*/

  userLogin$ = createEffect(() =>
  this.actions$.pipe(
    ofType(userActions.login),
    exhaustMap(action => this.userService.login(action.user).pipe(
      //tap(response => console.log(response)),
      map(response => userActions.loginSuccess(response)),
      catchError((error: any) => of(userActions.loginFailure))
    ))
  )
  )




}

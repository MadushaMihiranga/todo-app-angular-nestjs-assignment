import { createAction, props } from '@ngrx/store';
import { User } from "../entity/user";

export const USER_LOGIN = '[Login Page] Login';
export const USER_LOGIN_SUCCESS = '[Login Page] Login Success';
export const USER_LOGIN_FAILURE = '[Login Page] Login Failure';

export const USER_LOGOUT = '[Login Page] Logout';
export const USER_LOGOUT_SUCCESS = '[Login Page] Logout Success';
export const USER_LOGOUT_FAILURE = '[Login Page] Logout Failure';

export const login = createAction(
  USER_LOGIN,
  props<{user: User}>()
);

export const loginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<any>()
)

export const loginFailure = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
)


export const logout = createAction(
  USER_LOGOUT,
  props<any>()
);

/*export const logoutSuccess = createAction(
  USER_LOGOUT_SUCCESS,
  props<any>()
)

export const logoutFailure = createAction(
  USER_LOGOUT_FAILURE,
  props<{message: string}>()
)*/

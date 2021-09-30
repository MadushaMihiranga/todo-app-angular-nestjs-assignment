import { Action, createReducer, on } from '@ngrx/store';
import { User } from "../entity/user";
import * as userActions from '../actions';
import * as storage from '../state/storage';

export interface State {
  user: any;
  result: any;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  user: storage.getItem('user').user,
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const loginReducer = createReducer(
  initialState,
  on(userActions.login, (state, {user}) => ({...state,user, isLoading: true})),
  on(userActions.loginSuccess, (state, result) => ({...state,user: result.user, result, isLoading: false, isLoadingSuccess: true})),
  on(userActions.logout, (state) => ({...state,user: {},  result: '', isLoadingSuccess: false})),
);

export function reducer(state: State | undefined, action: Action): any {
  return loginReducer(state, action);
}

export const getLoggedInUser = (state: State) => {
  return {
    user: state.user,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userLogin = (state: State) => {
  return {
    user: state.user,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};


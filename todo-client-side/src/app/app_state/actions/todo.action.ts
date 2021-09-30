import { createAction, props } from '@ngrx/store';
import { Todo } from "../entity/todo";

///// TODO Actions

export const GET_TODOS = '[Todo] Get Todos';
export const GET_TODOS_SUCCESS = '[Todo] Get Todos Success';
export const GET_TODOS_FAILURE = '[Todo] Get Todos Failure';

export const CREATE_TODO = '[Todo] Create Todo';
export const CREATE_TODO_SUCCESS = '[Todo] Create Todo Success';
export const CREATE_TODO_FAILURE = '[Todo] Create Todo Failure';

export const DELETE_TODO = '[Todo] Delete Todo';
export const DELETE_TODO_SUCCESS = '[Todo] Delete Todo Success';
export const DELETE_TODO_FAILURE = '[Todo] Delete Todo Failure';

export const EDIT_TODO = '[Todo] Edit Todo';
export const EDIT_TODO_SUCCESS = '[Todo] Edit Todo Success';
export const EDIT_TODO_FAILURE = '[Todo] Edit Todo Failure';

//////////////////
export const GET_CATEGORY = '[Category] Get Category';
export const GET_CATEGORY_SUCCESS = '[Category] Get Category Success';
export const GET_CATEGORY_FAILURE = '[Category] Get Category Failure';

export const getCategory = createAction(GET_CATEGORY);
export const getCategorySuccess = createAction(GET_CATEGORY_SUCCESS,props<any>());
export const getCategoryFailure = createAction(GET_CATEGORY_FAILURE,props<any>());

//////////////
export const GET_STATUS = '[Status] Get Status';
export const GET_STATUS_SUCCESS = '[Status] Get Status Success';
export const GET_STATUS_FAILURE = '[Status] Get Status Failure';

export const getStatus = createAction(GET_STATUS);
export const getStatusSuccess = createAction(GET_STATUS_SUCCESS,props<any>());
export const getStatusFailure = createAction(GET_STATUS_FAILURE,props<any>());

export const getTodos =
  createAction(GET_TODOS,props<{
    page: number,
    size: number,
    email: string,
    title: string,
    status: string,
    category: string,
    from: string,
    to: string
    }>());
export const getTodosSuccess = createAction(GET_TODOS_SUCCESS,props<any>());
export const getTodosFailure = createAction(GET_TODOS_FAILURE,props<any>());

export const createTodo = createAction(CREATE_TODO, props<{todo: Todo}>());
export const createTodoSuccess = createAction(CREATE_TODO_SUCCESS, props<any>());
export const createTodoFailure = createAction(CREATE_TODO_FAILURE, props<any>());

export const deleteTodo = createAction(DELETE_TODO, props<{todo: Todo}>());
export const deleteTodoSuccess = createAction(DELETE_TODO_SUCCESS, props<any>());
export const deleteTodoFailure = createAction(DELETE_TODO_FAILURE, props<any>());

export const editTodo = createAction(EDIT_TODO, props<{todo: Todo}>());
export const editTodoSuccess = createAction(EDIT_TODO_SUCCESS, props<any>());
export const editTodoFailure = createAction(EDIT_TODO_FAILURE, props<any>());

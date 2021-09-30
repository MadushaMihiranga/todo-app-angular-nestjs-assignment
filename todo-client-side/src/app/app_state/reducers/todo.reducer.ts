import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from "../entity/todo";
import * as todoActions from '../actions';
import * as storage from '../state/storage';
import * as _ from "lodash";
import {Category} from "../entity/category";
import {Status} from "../entity/status";

export interface State {
  tasks?: Todo[];
  categoryList: Category[];
  statusList: Status[];
  currentTask?: Todo;
  deleteTaskId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  tasks: storage.getItem('todo').tasks,
  categoryList: storage.getItem('todo').categoryList,
  statusList: storage.getItem('todo').statusList,
  currentTask: {},
  deleteTaskId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const todoReducer = createReducer(
  initialState,

  // GeTasks
  on(todoActions.getTodos, (state) => ({...state, isLoading: true})),
  on(todoActions.getTodosSuccess, (state, result) => ({...state,tasks: result.response, isLoading: false, isLoadingSuccess: true})),
  // get category
  on(todoActions.getCategory, (state) => ({...state, isLoading: true})),
  on(todoActions.getCategorySuccess, (state, result) => ({...state,categoryList: result.response, isLoading: false, isLoadingSuccess: true})),
  //get status
  on(todoActions.getStatus, (state) => ({...state, isLoading: true})),
  on(todoActions.getStatusSuccess, (state, result) => ({...state,statusList: result.response, isLoading: false, isLoadingSuccess: true})),

  // Create Task Reducers
  on(todoActions.createTodo, (state, {todo}) => ({...state, isLoading: true, currentTask: todo})),
  on(todoActions.createTodoSuccess, (state, result) => {
    const tasks = undefined !== state.tasks ? _.cloneDeep(state.tasks) : [];
    const currentTask = undefined !== state.currentTask ? _.cloneDeep(state.currentTask) : {};
    currentTask.id = result.taskId;
    tasks.push(currentTask);
    return {
      ...state,
      tasks,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Task Reducers
  on(todoActions.deleteTodo, (state, {todo}) => ({...state, isLoading: true, deleteTaskId: todo.id})),
/*  on(todoActions.deleteTodoSuccess, (state, result) => {
    let tasks = undefined !== state.tasks ? _.cloneDeep(state.tasks) : [];
    if (result.status) {
      tasks = tasks.filter((task: { id: any; }) => task.id !== state.deleteTaskId);
    }
    return {
      tasks,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),*/

  // Edit Task Reducers
  on(todoActions.editTodo, (state, {todo}) => ({...state, isLoading: true, currentTask: todo})),
/*  on(todoActions.editTodoSuccess, (state, result) => {
    let tasks = undefined !== state.tasks ? _.cloneDeep(state.tasks) : [];
    const currentTask = undefined !== state.currentTask ? _.cloneDeep(state.currentTask) : {};
    tasks = tasks.map((tsk: { id: any; }) => {
      if (tsk.id === currentTask.id) {
        tsk = currentTask;
      }
      return tsk;
    });
    return {
      tasks,
      isLoading: false,
      isLoadingSuccess: true
    };
  })*/
);

export function reducer(state: State | undefined, action: Action): any {
  return todoReducer(state, action);
}

export const getTasks = (state: State) => {
  return {
    tasks: state.tasks,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

export const getCategoryList = (state: State) => {
  return {
    categoryList: state.categoryList,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

export const getStatusList = (state: State) => {
  return {
    statusList: state.statusList,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

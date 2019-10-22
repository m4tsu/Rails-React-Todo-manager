import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducers } from 'redux-form'

import taskReducer, { TasksState } from './task/reducer';

export type AppState = {
  form: any,
  tasks: TasksState
};

const store = createStore(
  combineReducers<AppState>({
    form: reduxFormReducers,
    tasks: taskReducer
  })
);

export default store;
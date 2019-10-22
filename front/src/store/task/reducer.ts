import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TaskActions } from './actions';

import _ from 'lodash'

export interface TaskProps {
  id: number;
  title: string | null;
  detail: string | null;
  status: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface TasksState {
  [index: number]: TaskProps
}

const initialState: TasksState = {
  0: {
    id: 0,
    title: null,
    detail: null,
    status: null,
    created_at: null,
    updated_at: null
  }
}

const taskReducer = reducerWithInitialState(initialState)
  .case(TaskActions.readTasks, (state: TasksState, tasks: TasksState) => {
    console.log('fetch')
    return (tasks)
  })
  .case(TaskActions.postTask, (state: TasksState, task: TasksState): TasksState => {
    console.log('post')
    return ({...state, ...task})
  })

export default taskReducer;
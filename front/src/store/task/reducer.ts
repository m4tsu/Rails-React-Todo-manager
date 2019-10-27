import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TaskActions } from './actions';

import _ from 'lodash'

export const statusOptions = ['waiting', 'working', 'done', 'pending']

export interface TaskProps {
  id: number;
  title: string;
  detail: string | null;
  status: 'waiting' | 'working' | 'done' | 'pending';
  created_at: string | null;
  updated_at: string | null;
}

export interface TasksState {
  [index: number]: TaskProps
}

const initialState: TasksState = {
  0: {
    id: 0,
    title: '',
    detail: null,
    status: 'waiting',
    created_at: null,
    updated_at: null
  }
}

const taskReducer = reducerWithInitialState(initialState)
  .case(TaskActions.readTasks, (state: TasksState, tasks: TasksState) => {
    console.log('fetch');
    return tasks
  })
  .case(TaskActions.postTask, (state: TasksState, task: TasksState): TasksState => {
    console.log('post');
    return {...state, ...task}
  })
  .case(TaskActions.updateTask, (state: TasksState, task: TasksState): TasksState => {
    console.log('update');
    return{...state, ...task}
  })
  .case(TaskActions.deleteTask, (state: TasksState, task_id: number): TasksState => {
    console.log('delete');
    delete state[task_id]
    return {...state }
  })

export default taskReducer;
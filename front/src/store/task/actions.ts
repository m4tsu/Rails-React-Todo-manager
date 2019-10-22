import actionCreatorFactory from 'typescript-fsa';

import { TasksState } from './reducer'

const actionCreator = actionCreatorFactory();

export const TaskActions = {
  readTasks: actionCreator<TasksState>('READ_TASKS'),
  postTask: actionCreator<TasksState>('POST_TASK')
}
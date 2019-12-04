import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'

import TaskList from './TaskList'
import TaskNew from './TaskNew'

interface TasksPageProps extends RouteComponentProps<{}> {

}

const TasksPage = (props: TasksPageProps) => {
  return (
    <>
      <TaskNew/>
      <TaskList/>
    </>

  )
}

export default TasksPage;
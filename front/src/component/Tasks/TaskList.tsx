import * as React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { DEV_ROOT_URL } from '../../environment'
// import { Paper, createStyles, makeStyles, Theme} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

import Task, { TaskProps } from './Task';

interface TaskListProps {
}
interface TaskListState {
  tasks: {
    [index: number]: TaskProps
  }
}

class TaskList extends React.Component<TaskListProps, TaskListState> {
  constructor(props: TaskListProps) {
    super(props);
    const initialTask = { 0: {
      id: 0,
      title: null,
      content: null,
      status: null,
      created_at: null,
      updated_at: null
    }}
    this.state = {
      tasks: initialTask
    }
  }
  componentDidMount() {
    axios.get(`${DEV_ROOT_URL}/tasks`)
    .then((response) => {
      this.setState({ tasks: _.mapKeys(response.data, 'id') })
    })
    .catch(data => {
      console.log(data)
    });
  }

  render() {
    return(
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>CONTENT</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>CREATED_AT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {this.renderTaskItems()} */}
            {/* ここにタスクがはいる */}
            {
              _.map(this.state.tasks, task => (
                <Task
                  key={task.id}
                  {...task}
                />
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default TaskList;
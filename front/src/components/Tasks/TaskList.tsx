import React, { FC, useEffect } from 'react';
import _ from 'lodash';
// import { Paper, createStyles, makeStyles, Theme} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

import Task from './Task';


import { useTask } from '../../containers/taskContainer';

const TaskList: FC = () => {
  const { tasks, getTasks, loading, error, cancelToken } = useTask()
  useEffect(() => {
    console.log('getTasks')
    getTasks();
    return () => {
      cancelToken.cancel('cancel request')
    }
  }, [])


  if (loading) {
    return <p>Now Loading...</p>
  }
  return (
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
            {
              _.map(tasks, task => (
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

export default TaskList;
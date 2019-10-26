import React, { FC, useEffect } from 'react';
import { useState, useCallback } from 'react';
import { TaskProps } from '../../store/task/reducer'
import _ from 'lodash';
// import { Paper, createStyles, makeStyles, Theme} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

import Task from './Task';
import TaskEditModal from './TaskEditModal';

import { useTask } from '../../containers/taskContainer';

const TaskList: FC = () => {
  const { tasks, getTasks, loading, error, cancelToken } = useTask()
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [modalTask, setModalTask] = useState({})
  useEffect(() => {
    console.log('getTasks')
    getTasks();
    return () => {
      cancelToken.cancel('cancel request');
    }
  }, [])

  const closeModal = () => {
    setEditModalOpen(false);
  }

  const openModal = () => {
    setEditModalOpen(true);
  }

  const provideTask = (task:TaskProps) => {
    setModalTask(task)
  }

  if (loading) {
    return <p>Now Loading...</p>
  }
  return (
    <>
      <TaskEditModal
        modalOpen={editModalOpen}
        closeModal={closeModal}
        initialValues={modalTask}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              _.map(tasks, task => (
                <Task
                  key={task.id}
                  task={task}
                  openModal={openModal}
                  setModalTask={provideTask}
                />
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

export default TaskList;
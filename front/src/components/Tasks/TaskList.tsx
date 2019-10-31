import React, { FC, useEffect, useState, useCallback, useMemo} from 'react';
import { TaskProps, taskFilters } from '../../store/task/reducer'
import _ from 'lodash';

import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { SelectBoxOutlined } from '../layout/forms/SelectBox';

import Task from './Task';
import TaskEditModal from './TaskEditModal';

import { useTask } from '../../containers/taskContainer';

const TaskListWrap = styled(Box)`
  height: 50vh;
  overflow: auto;
  margin-bottom: 20px;
`

const TaskList: FC = () => {
  const { tasks, getTasks, deleteTask, updateTaskStatus, loading, error, cancelToken } = useTask()
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [modalTask, setModalTask] = useState({})
  const [withDoneTasks, setWithDoneTasks] = useState<boolean>(false)
  const [taskFilter, setTaskFilter] = useState<string>('none')

  const tasksDESC = _.orderBy(tasks, 'id', 'desc')
  const notDoneTasks = _.filter(tasksDESC, task => task.status !== 'done')
  const taskList = withDoneTasks ? tasksDESC : notDoneTasks

  const filterdTasks = taskFilter === 'none' ? taskList : _.filter(taskList, task => {
    return task.status === taskFilter;
  })
  useEffect(() => {
    getTasks();
    return () => {
      cancelToken.cancel('cancel request');
    }
  }, [])

  const closeModal = () => {
    setEditModalOpen(false);
  }

  const openEditModal = () => {
    setEditModalOpen(true);
  }

  const provideTask = (task:TaskProps) => {
    setModalTask(task);
  }

  const handleChangeWithDoneTasks = () => {
    setWithDoneTasks(!withDoneTasks)
  }

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskFilter(event.target.value)
  }

  if (loading) {
    return <p>Now Loading...</p>
  }else if (!!tasks[0]) {
    return <p>データを取得できません</p>
  }
  return (
    <>
      <Box mb={1} px='24px'>
        <Grid container direction='column' justify='flex-end' spacing={2}>
          <Grid item xs={12} sm={3} >
            <SelectBoxOutlined
              label='フィルター'
              name='filter'
              input= {{name: 'filter', onChange: handleChangeFilter, value: taskFilter}}
              options={taskFilters}
              width='120px'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={<Switch checked={withDoneTasks} onChange={handleChangeWithDoneTasks} color='primary' />}
              label='完了タスクを表示'
            />
          </Grid>
        </Grid>
      </Box>
      <TaskListWrap>
        {
          _.map(filterdTasks, task => (
            <Task
              key={task.id}
              task={task}
              openEditModal={openEditModal}
              setModalTask={provideTask}
              deleteTask={deleteTask}
              updateTaskStatus={updateTaskStatus}
            />
          ))
        }
      </TaskListWrap>
      <TaskEditModal
        modalOpen={editModalOpen}
        closeModal={closeModal}
        initialValues={modalTask}
      />
    </>
  )
}

export default TaskList;
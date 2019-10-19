import React, { FC, useState } from 'react';
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

interface TaskNewProps {
}

const TaskNew: FC = () => {
  const [newTask, setNewTask] = useState({title: '', content: ''});
  const handleChange = (event: any) => {
    setNewTask({...newTask, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log(newTask)
    createTask(newTask);
  }

  const createTask = (newTask: {}) => {
    axios.post(`${DEV_ROOT_URL}/tasks`, {task: newTask})
    .then((response) => {
      console.log(response.data)
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  return(
    <Paper style={{height: 300, width: 500, margin: '20px auto'}}>
       タスク　作成　する　スペース
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type='text' name='title' onChange={handleChange} />
        </label>
        <label>
          Content:
          <input type='text' name='content' onChange={handleChange} />
        </label>
        <input type='submit' value='Submit'/>
      </form>
      <p>送信するやつ</p>
      <p>{newTask.title}</p>
      <p>{newTask.content}</p>
    </Paper>
  )
}

export default TaskNew;
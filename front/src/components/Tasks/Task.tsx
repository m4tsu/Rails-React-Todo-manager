import React, { FC, SetStateAction } from 'react';
import { useState, useCallback } from 'react';
import { TaskProps } from '../../store/task/reducer'
import { useTask } from '../../containers/taskContainer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { StyledButtonContained } from '../layout/atoms/buttons';

import TaskEditModal from './TaskEditModal'

interface taskRowProps {
  task: TaskProps;
  setModalTask(task: TaskProps): void;
  openModal(): void;
  deleteTask(task_id: number): void;
}

const Task: FC<taskRowProps> = (props) => {
  const { task, deleteTask }= props

  const handleClick = () => {
    props.openModal();
    props.setModalTask(task);
  }

  const handleDeleteClick = () => {
    deleteTask(task.id);
  }

  return (
  <TableRow key={task.id}>
    <TableCell>{task.title}</TableCell>
    <TableCell>{task.detail}</TableCell>
    <TableCell>{task.status}</TableCell>
    <TableCell>
      <StyledButtonContained onClick={handleClick} variant='contained' color='primary'>編集</StyledButtonContained>
    </TableCell>
    <TableCell>
      <StyledButtonContained onClick={handleDeleteClick} variant='contained' color="secondary">削除</StyledButtonContained>
    </TableCell>
  </TableRow>
)}

export default Task;
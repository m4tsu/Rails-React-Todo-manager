import React, { FC, SetStateAction } from 'react';
import { useState, useCallback } from 'react';
import { TaskProps } from '../../store/task/reducer'

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
}

const Task: FC<taskRowProps> = (props) => {
  // const [editTaskModalOpen, setEditTaskModalOpen] = useState(false)
  const {task}= props
  const closeEditTaskModal = () => {
    // setEditTaskModalOpen(false)
  }
  const handleClick = () => {
    // setEditTaskModalOpen(true)
    props.openModal();
    props.setModalTask(task);
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
      <StyledButtonContained variant='contained' color="secondary">削除</StyledButtonContained>
    </TableCell>
  </TableRow>
)}

export default Task;
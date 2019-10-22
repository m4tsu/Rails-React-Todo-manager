import React, { FC } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { TaskProps } from '../../store/task/reducer'


const Task: FC<TaskProps> = ({
  id,
  title,
  content,
  status,
  created_at
}) => (
  <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{content}</TableCell>
    <TableCell>{status}</TableCell>
    <TableCell>{created_at}</TableCell>
  </TableRow>
)

export default Task;
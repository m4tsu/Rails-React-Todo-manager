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
  detail,
  status,
  created_at
}) => (
  <TableRow>
    <TableCell>{title}</TableCell>
    <TableCell>{detail}</TableCell>
    <TableCell>{status}</TableCell>
  </TableRow>
)

export default Task;
import React, { FC } from 'react';
import axios from 'axios';
import _ from 'lodash';
// import { Paper, createStyles, makeStyles, Theme} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';


export interface TaskProps {
  id: number;
  title: string | null;
  content: string | null;
  status: string | null;
  created_at: string | null;
  updated_at: string | null;
}

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
import React, { FC, SetStateAction } from 'react';
import { useState, useCallback } from 'react';
import { useTask } from '../../containers/taskContainer';
import { Field, reduxForm, InjectedFormProps, reset } from 'redux-form';

import { TaskProps } from '../../store/task/reducer'
import { statusOptions } from '../../store/task/reducer'

import styled from 'styled-components';
import { StyledButtonContained, StyledButtonRound } from '../layout/atoms/buttons';
import { SelectBoxOutlined } from '../layout/forms/SelectBox'

import { makeStyles, createStyles, Theme }  from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import TaskEditModal from './TaskEditModal'
import theme from '../../theme';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignCenter: {
      alignItems: 'center'
    },
    positionRight: {
      margin: '0 0 0 auto'
    }
  })
)

interface taskRowProps {
  task: TaskProps;
  setModalTask(task: TaskProps): void;
  openEditModal(): void;
  deleteTask(task_id: number): void;
  updateTaskStatus(task: TaskProps, newStatus: string): void;
}

const Task: FC<taskRowProps> = (props) => {
  const { task, deleteTask, updateTaskStatus }= props
  const classes = useStyles();
  const handleEditClick = (event: any) => {
    props.openEditModal();
    props.setModalTask(task);
    event.stopPropagation();
  }

  const handleDeleteClick = () => {
    deleteTask(task.id);
  }

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTaskStatus(task, event.target.value);
    console.log(event)
    event.stopPropagation();
  }

  return (
  <>
  <ExpansionPanel key={task.id}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls=""
      id=""
    >
      <Grid container alignItems='center' justify='flex-start' spacing={2}>
        <Grid item xs={3}>
          <SelectBoxOutlined
            label=''
            name='status'
            input= {{name: 'status', onChange: handleChangeStatus, value: task.status}}
            options={statusOptions}
            width='120px'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5'>{task.title}</Typography>
        </Grid>
        <Grid item className={classes.positionRight}>
          <StyledButtonRound onClick={handleEditClick} variant='contained' color='primary'><EditIcon/></StyledButtonRound>
          <StyledButtonRound onClick={handleDeleteClick} variant='contained' color="secondary"><DeleteIcon/></StyledButtonRound>
        </Grid>
      </Grid>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        {task.detail}
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
</>
)}

export default Task;
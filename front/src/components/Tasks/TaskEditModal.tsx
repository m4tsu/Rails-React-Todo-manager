import React, { FC, useState } from 'react';
import _ from 'lodash';

import { TaskProps } from '../../store/task/reducer'

import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useTask } from '../../containers/taskContainer'

import TextFieldRF from '../layout/forms/TextFieldRF'
import { StyledButtonContained } from '../layout/atoms/buttons'
import Grid from '@material-ui/core/Grid';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

const FormGrid = styled(Grid)`
  margin-bottom: 15px;
`

interface updateTaskProps {
  title: string;
  detail: string | null;
  status: 'waiting' | 'working' | 'done' | 'pending'
}

interface Errors {
  [key: string]: string;
}

interface editTaskProps {
  modalOpen: boolean;
  closeModal(): any;
}

const TaskEditModal: FC<InjectedFormProps<updateTaskProps, editTaskProps> & editTaskProps> = (props) => {
  const { updateTask } = useTask()
  const { handleSubmit, pristine, submitting, invalid, closeModal} = props

  const handleClose = () => {
    closeModal();
  }
  const submitTask = (value: updateTaskProps) => {
    updateTask(value);
    closeModal();
  }

  return(
    <Dialog open={props.modalOpen} onClose={handleClose} fullWidth={true} maxWidth="sm" aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">edit task</DialogTitle>
      <form onSubmit={handleSubmit(submitTask)}>
        <DialogContent>
          <DialogContentText>
            edit して
          </DialogContentText>
            <Grid container justify='center'>
              <FormGrid item xs={10}>
                <Field
                  label='Task'
                  name='title'
                  component={TextFieldRF}
                />
              </FormGrid>
              <FormGrid item xs={10}>
                <Field
                  label='Detail'
                  name='detail'
                  multiline
                  rows='4'
                  component={TextFieldRF}
                />
              </FormGrid>
              <FormGrid item xs={10}>
                <Field
                  label='Status'
                  name='status'
                  component={TextFieldRF}
                />
              </FormGrid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <StyledButtonContained onClick={handleClose} variant='contained' color="secondary">
            Cancel
          </StyledButtonContained>
          <StyledButtonContained
                  type='submit'
                  variant='contained'
                  color='primary'
                  disabled={ pristine || submitting || invalid }>Update
          </StyledButtonContained>
        </DialogActions>
      </form>
    </Dialog>
  )
}

const validate = (values: updateTaskProps) => {
  const errors: Errors = {}
  if(!values.title) errors.title = 'Task is required'
  return errors;
}

export default reduxForm<updateTaskProps, editTaskProps>({
  form: 'editTaskForm',
  enableReinitialize: true,
  validate,
})(TaskEditModal)
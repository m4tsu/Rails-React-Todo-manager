import React, { FC, useState } from 'react';
import _ from 'lodash';

import styled from 'styled-components';
import { Paper } from '@material-ui/core';

import { useTask } from '../../containers/taskContainer'

import TextField from '@material-ui/core/TextField';
import TextFieldRF from '../layout/forms/TextFieldRF'
import { StyledButtonContained } from '../layout/atoms/buttons'
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

const FormGrid = styled(Grid)`
  margin-bottom: 15px;
`

interface newTaskProps {
  title: string;
  detail: string;
}

interface Errors {
  [key: string]: string;
}

const TaskNew: FC = (formProps: any) => {
  const { postTask, error } = useTask()
  console.log(formProps)
  const {handleSubmit, pristine, submitting, invalid} = formProps

  return(
    <Paper style={{height: 300, width: 500, margin: '20px auto', padding: 20}}>
      <form onSubmit={handleSubmit(postTask)}>
        <Grid container direction='column'>
          <FormGrid item xs={6}>
            <Field
              style={{margin: 40}}
              label='Task'
              name='title'
              component={TextFieldRF}
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <Field
              label='Detail'
              name='detail'
              multiline
              rows='4'
              component={TextFieldRF}
            />
          </FormGrid>
          <Grid item>
            <StyledButtonContained
              type='submit'
              variant='contained'
              color='primary'
              disabled={ pristine || submitting || invalid }>Create Task
            </StyledButtonContained>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

const validate = (values: newTaskProps) => {
  const errors: Errors = {}
  if(!values.title) errors.title = 'Task is required'
  return errors;
}

export default reduxForm({
  form: 'newTaskForm',
  validate
})(TaskNew)
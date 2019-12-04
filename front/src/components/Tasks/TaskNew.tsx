import React, { FC, useState } from 'react';
import _ from 'lodash';

import styled from 'styled-components';

import { useTask } from '../../containers/taskContainer'

import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import TextFieldRF from '../layout/forms/TextFieldRF'
import { StyledButtonContained } from '../layout/atoms/buttons'
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';
import { Field, reduxForm, InjectedFormProps, reset } from 'redux-form';
import theme from '../../theme';

const FormGrid = styled(Grid)`
  margin-bottom: 15px;
`

const BoxBorderBottom = styled(Box)`
  border-bottom: solid 1px lightgray;
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
  const {handleSubmit, pristine, submitting, invalid} = formProps

  return(
    <BoxBorderBottom my={3} py={2} >
      <form onSubmit={handleSubmit(postTask)}>
        <Grid container direction='column' justify='center'>
          <FormGrid item xs={12} md={6}>
            <Field
              style={{margin: 40}}
              label='タスク'
              name='title'
              component={TextFieldRF}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <Field
              label='詳細'
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
              disabled={ pristine || submitting || invalid }>タスクを追加
            </StyledButtonContained>
          </Grid>
        </Grid>
      </form>
    </BoxBorderBottom>
  )
}

const validate = (values: newTaskProps) => {
  const errors: Errors = {}
  if(!values.title) errors.title = 'Required'
  return errors;
}

const afterSubmit = (result: any, dispatch: any) => {
  dispatch(reset('newTaskForm'))
}

export default reduxForm({
  form: 'newTaskForm',
  validate,
  onSubmitSuccess: afterSubmit
})(TaskNew)
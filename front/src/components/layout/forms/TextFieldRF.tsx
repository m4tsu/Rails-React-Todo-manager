import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

interface TextFieldProps {
  input: any;
  name: string;
  label: string;
  type: string;
  multiline: boolean | null;
  rows: string| null;
  meta: {
    touched: string;
    error: string;
  }
}

const TextFieldRF: FC<TextFieldProps> = (
  { input, label, type='text', multiline=false, rows='1', meta: {touched, error}}) => {
  return (
    <TextField
      style={{width: '100%'}}
      label={label}
      multiline={multiline}
      type={type}
      rows={rows}
      {...input}
      error={touched && !!error}
      helperText={touched && error}
      variant='outlined'
    />
  )
}

export default TextFieldRF;
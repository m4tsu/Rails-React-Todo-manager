import React, { FC } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import styled from 'styled-components';

interface SelectBoxProps {
  input: any;
  name: string;
  label: string;
  meta: {
    touched: string;
    error: string;
  }
  options: Array<any>;
}

const SelectBox: FC<SelectBoxProps> = ( { label, input, options } ) => {
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const renderOptionItems = options.map(option => (
    <MenuItem key={option} value={option}>{option}</MenuItem>
  ))

  return(
    <FormControl variant='outlined'>
      <InputLabel ref={inputLabel} htmlFor='select'>{label}</InputLabel>
      <Select
        labelWidth={labelWidth}
        {...input}
        inputProps={{
          id: 'select'
        }}
      >
        {renderOptionItems}
      </Select>
    </FormControl>
  )
}

export default SelectBox;
import React, { FC } from 'react';
import _ from 'lodash';

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
  meta?: {
    touched: string;
    error: string;
  }
  options: Array<{ value: string | number, label: string }>;
  width?: string;
}

export const SelectBoxOutlined: FC<SelectBoxProps> = ( { label, input, options, width } ) => {
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const renderOptionItems = options.map(option => (
    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
  ))

  return(
    <FormControl variant='outlined' style={{width: width ? width : '100%'}}>
      <InputLabel ref={inputLabel} htmlFor='select'>{label}</InputLabel>
      <Select
        onClick={ event => {event.stopPropagation()}}
        labelWidth={labelWidth*1.2}
        {...input}
        autoWidth={true}
        inputProps={{
          id: 'select'
        }}
      >
        {renderOptionItems}
      </Select>
    </FormControl>
  )
}

// export const SelectBoxFilled: FC<SelectBoxProps> = ( { label, input, options }) => {
//   const renderOptionItems = options.map(option => (
//     <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
//   ))
//   return (
//     <FormControl valiant='filled'>
//       <InputLabel></InputLabel>
//       <Select
//         onClick={event => {event.stopPropagation()}}
//         {...input}
//       >
//         {renderOptionItems}
//       </Select>
//     </FormControl>
//   )
// }

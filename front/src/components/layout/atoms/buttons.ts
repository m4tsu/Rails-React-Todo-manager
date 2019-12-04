import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledButtonContained = styled(Button)`
  color: #fafafa;
  font-weight: bold;
  text-transform: none;
`

export const StyledButtonRound = styled(Button)`
  color: #fafafa;
  text-transform: none;
  min-width: initial;
  width: 44px;
  height: 44px;
  margin: 0 5px
  border-radius: 50%;
`
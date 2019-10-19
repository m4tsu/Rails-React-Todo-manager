import * as React from 'react';
import { Paper, createStyles, makeStyles, Theme} from '@material-ui/core'
import styled from 'styled-components';

import SampleComponent from '../component/Sample';


interface SampleContainerProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  outer: {
    height: '200%',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  }
}));

const StyledPaper = styled(Paper)`
  background-color: ${props => props.theme.palette.primary.main};
  width: 80%;
  min-width: 420px;
  min-height: 420px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SampleContainer = (props: SampleContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
        <StyledPaper>
          <SampleComponent
            greeting='Hello!!!!'
          />
        </StyledPaper>
      </div>
  );
}

export default SampleContainer;
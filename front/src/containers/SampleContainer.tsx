import * as React from 'react';
import { Paper, createStyles, makeStyles, Theme} from '@material-ui/core'
import styled from 'styled-components';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SampleComponent from '../components/Sample';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    outer: {
      height: '200%',
      padding: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);


interface SampleContainerProps {
  title: string;
}

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
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default SampleContainer;
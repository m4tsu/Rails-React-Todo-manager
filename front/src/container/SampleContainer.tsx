import * as React from 'react';
import { Paper, createStyles, makeStyles, Theme} from '@material-ui/core'
import SampleComponent from '../component/Sample';


interface SampleContainerProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  outer: {
    height: '200%',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  inner: {
    width: '80%',
    minWidht: '420px',
    minHeight: '420px',
    margin: '0 auto',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const SampleContainer = (props: SampleContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
        <Paper className={classes.inner}>
          <SampleComponent
            greeting='Hello!!!!'
          />
        </Paper>
      </div>
  );
}

export default SampleContainer;
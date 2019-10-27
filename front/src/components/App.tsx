import * as React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TasksPage from './Tasks/TasksPage'
import MenuAppBar from './layout/Header'
import SampleContainer from '../containers/SampleContainer';

import Container from '@material-ui/core/Container';

const App: React.FC = () => {
  return (
    <>
      <MenuAppBar/>
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={SampleContainer} />
          <Route path='/tasks' component={TasksPage} />>
        </Switch>
      </Container>
    </>
  );
}

export default App;

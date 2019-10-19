import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from "@material-ui/styles";
import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';
import theme from "./theme";

import TasksPage from './component/Tasks/TasksPage'
import MenuAppBar from './component/pageComponent/Header'


ReactDOM.render(
  <StylesProvider injectFirst>
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
          <BrowserRouter>
            <MenuAppBar/>
            <Switch>
              <Route exact path='/' component={App} />
              <Route path='/tasks' component={TasksPage} />>
            </Switch>
          </BrowserRouter>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StylesProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

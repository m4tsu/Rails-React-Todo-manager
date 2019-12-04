import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider }  from 'react-redux';
import Store from './store/store'

import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from "@material-ui/styles";
import {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';
import theme from "./theme";

import TasksPage from './components/Tasks/TasksPage'
import MenuAppBar from './components/layout/Header'



ReactDOM.render(
  <StylesProvider injectFirst>
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Provider store={Store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Provider>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StylesProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

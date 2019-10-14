import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from "@material-ui/styles";
// import styled, {
//   ThemeProvider as StyledThemeProvider
// } from 'styled-components';
// import theme from "./theme";

import Mypage from './component/Mypage'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/mypage' component={Mypage} />>
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

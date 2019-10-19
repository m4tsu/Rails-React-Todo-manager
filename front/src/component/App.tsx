import * as React from 'react';
import { Link } from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css';

import SampleContainer from '../container/SampleContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SampleContainer
        title='Container Title'
      />
    </div>
  );
}

export default App;

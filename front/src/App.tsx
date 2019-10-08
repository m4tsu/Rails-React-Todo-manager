import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import SampleComponent from './component/Sample';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <SampleComponent
        greeting='Heloo!!!!!'
      />
    </div>
  );
}

export default App;

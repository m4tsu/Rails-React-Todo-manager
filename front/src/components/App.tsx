import * as React from 'react';

import '../App.css';

import SampleContainer from '../containers/SampleContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <SampleContainer
        title='Container Title'
      />
    </div>
  );
}

export default App;

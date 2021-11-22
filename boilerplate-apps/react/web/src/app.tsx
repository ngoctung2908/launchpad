import React from 'react';
import CounterViewer from './counter-viewer';
import CounterControls from './counter-controls';

const App: React.FC = () => {
  return (
    <div>
      <h1>React App with Typescript.</h1>
      <CounterViewer />
      <CounterControls />
    </div>
  );
};
export default App;

import React from 'react';
import './App.css';

import DemoJSS from './demo/DemoJSS';
import DemoStyled from './demo/DemoStyled';

function App() {
  return (
    <div className="App">
      <DemoJSS />
      <hr/>
      <DemoStyled />
    </div>
  );
}

export default App;

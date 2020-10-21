/** @module App
 *  @since 2020.10.18, 21:16
 *  @changed 2020.10.21, 01:39
 */

import React from 'react';
import logo from './logo.svg';
import './App.pcss';

// import config from 'config/index.js';
// import buildConfig from './config/build.js'; // Worked
// import buildConfig from 'config/build.js'; // Worked
// import config from 'config';
// import config from 'config';
// import { build } from 'config';

const { build } = require('config');


console.log('isDevServer:', build.isDevServer);
debugger;


function App() {
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
    </div>
  );
}

export default App;

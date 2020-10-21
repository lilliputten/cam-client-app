/** @module App
 *  @since 2020.10.18, 21:16
 *  @changed 2020.10.21, 01:39
 */

import React from 'react';

import { Button } from '@material-ui/core';

import logo from './logo.svg';

import { cn } from '@bem-react/classname';

import './App.pcss';

const cnApp = cn('App');

const { build } = require('config');


// DEBUG:
console.log('isDevServer:', build.isDevServer);
// debugger;


function App() {
  return (
    <div className={cnApp({ dark: false })}>
      <header className={cnApp('header')}>
        <img src={logo} className={cnApp('logo')} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/*
        <a
          className={cnApp('link')}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
        <Button
          variant="contained"
          color="primary"
          href="https://reactjs.org"
        >
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;

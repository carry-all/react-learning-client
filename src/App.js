import React, { useState } from 'react';
import './App.css';
import Game from './game/game';
import Welcome from './welcome/welcome';
import End from './end/end';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Welcome} />
      <Route path="/game" exact component={Game} />
      <Route path="/end" exact component={End} />
    </HashRouter>
  );
} 

export default App;

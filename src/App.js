import React, { useState } from 'react';
import './App.css';
import Game from './game/game';
import Welcome from './welcome/welcome';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Welcome} />
      <Route path="/game" component={Game} />
    </HashRouter>
  );
} 

export default App;

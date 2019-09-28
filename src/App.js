import React, { useState } from 'react';
import './App.css';
import Game from './game/game';
import { arrayExpression } from '@babel/types';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Game />
        </header>
      </div>  
    </HashRouter>
  );
} 

export default App;

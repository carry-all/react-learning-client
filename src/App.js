import React, { useState } from 'react';
import './App.css';
import Game from './game/game';
import { arrayExpression } from '@babel/types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>  
  );
} 

export default App;

import React, { useState } from 'react';
import './App.css';
import Table from './table';
import { arrayExpression } from '@babel/types';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(2);

  const [field, setField] = useState([
    [0, 0, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, ],
    [2, 1, 0, 0, 0, 0, ],
    [2, 2, 1, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, ],
  ]);
  const columns = field.length;
  const columnHeight = field[0].length;
  const [winner, setWinner] = useState(0);

  function move(columnId) {
    if (winner !== 0) {
      return;
    }

    let column = field[columnId];
    if (column[5] !== 0) {
      return;
    }

    setCurrentPlayer(currentPlayer === 1? 2 : 1);
    column[column.indexOf(0)] = currentPlayer;
    field[columnId] = column;
    setField(field);

    let flatField = [];
    field.forEach((v) => {
      flatField = flatField.concat(v, 3);
    });

      for(let i = 0; i < columnHeight; i++) {
        for(let j = 0; j < columns; j++) {
        flatField = flatField.concat(field[j][i]);
      }
      flatField = flatField.concat(3);
    }

    flatField = flatField.filter((v) => v !== 0);

    for (let i = 0; i < flatField.length - 3; i++) {
      let slice = flatField.slice(i, i + 4);

      if ((slice[0] === slice[1]) &&
      (slice[1] === slice[2]) &&
      (slice[2] === slice[3]) &&
      (slice[0]) !== 3) {
        setWinner(slice[0]);
        console.log('Found winner ' + winner);
      }
    }

    console.log('Move to columnId ' + columnId);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Table field={field} currentPlayer={currentPlayer} winner={winner} onColumnPress={move} />
        {/* <Hello name="N" onPress={() => {alert(2);}}/>
        <Hello/>
        <Hello name="Max"/> */}
      </header>
    </div>  
  );
} 

export default App;

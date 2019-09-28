import React, { useState, useEffect } from 'react';
import Table from '../table';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import bluebird from 'bluebird';

function Game(props) {
  const [currentPlayer, setCurrentPlayer] = useState(2);

  const [field, setField] = useState([
    [2, 0, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, ],
    [2, 0, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, ],
  ]);
  const columns = field.length;
  const columnHeight = field[0].length;
  const [winner, setWinner] = useState(0);

  useEffect(() => {
      setInterval(() => {
        const request = axios.get("http://localhost:4000/info");
        const data = request.then((response) => {
        setField(response.data.field);
        setCurrentPlayer(response.data.currentPlayer);
        setWinner(response.data.winner);
        console.log("I'm here");
        })
      }, 2000);
  }, [] /* means doesn't track changes */);

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

    calculateWinner();

    console.log('Move to columnId ' + columnId);

    function calculateWinner() {
      checkLines();
      checkDiagonals();

      function checkDiagonals() {
        // todo
      }

      function checkLines() {
        let flatField = flattenField();
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
      }

      function flattenField() {
        let flatField = [];
        field.forEach((v) => {
          flatField = flatField.concat(v, 3);
        });
        for (let i = 0; i < columnHeight; i++) {
          for (let j = 0; j < columns; j++) {
            flatField = flatField.concat(field[j][i]);
          }
          flatField = flatField.concat(3);
        }
        flatField = flatField.filter((v) => v !== 0);

        return flatField;
      }
    }
  }

  if (!props.location.state) {
      return <Redirect to="/" />
  }

  if (winner != 0) {
    return <Redirect to={{
        pathname: "/end",
        state: {
            winner: props.location.state.names[winner - 1]
        }
    }}/>
  }

  return (
    <div>
        <Table
            field={field}
            currentPlayer={props.location.state.names[currentPlayer - 1]}
            winner={winner}
            onColumnPress={move}
        />
    </div>
  );
} 

export default Game;

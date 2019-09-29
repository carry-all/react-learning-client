import React, { useState, useEffect } from 'react';
import Table from '../table';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
  const [winner, setWinner] = useState(0);

  function updateFieldFromResponse(response) {
    setField(response.data.field);
    setCurrentPlayer(response.data.currentPlayer);
    setWinner(response.data.winner);
  }

  useEffect(() => {
      const intervalId = setInterval(() => {
        const request = axios.get("http://localhost:4000/info");
        request.then((response) => {
          updateFieldFromResponse(response);
          console.log("I'm here");
        })
      }, 2000);

      return () => {
          clearInterval(intervalId);
      }
  }, [] /* means doesn't track changes */);

  function move(columnId) {
      const request = axios.post("http://localhost:4000/move", {column: columnId});
      request.then((response) => {
        updateFieldFromResponse(response);
      });
  }

  if (!props.location.state) {
      return <Redirect to="/" />
  }

  if (winner !== 0) {
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

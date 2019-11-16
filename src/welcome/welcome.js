import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Hello from '../hello';

function Welcome(props) {
    const [names, setNames] = useState(['Bobr', 'Igor']);
    const [player1, setPlayer1] = useState("Bobr");
    const player2Input = useRef();

    return (
    <div>
        <h1>Welcome</h1>
        <Link to={{
            pathname: '/game',
            state: {
                names: ['Bobr', 'Igor']
            }
        }} >Begin the game</Link>
        <p>Player 1:<input type="text" value={player1} onChange={(event) => {
            setPlayer1(event.target.value);
        }} /></p>
        <p>Player 2:<input type="text" value={names[1]} ref={player2Input}/></p>
        <input type="button" onClick={() => {
            console.log(player2Input.current.value);
        }} value="click me"/>
        <Hello />
    </div>
    );
}

export default Welcome;

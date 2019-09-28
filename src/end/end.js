import React from 'react';
import { Link } from 'react-router-dom';

function End(props) {

    return (
    <div>
        <h1>{props.location.state.winner} has won!</h1>
        <Link to="/game" >Start again</Link>
    </div>
    );
}

export default End;

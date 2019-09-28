import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function End(props) {

    if (!props.location.state) {
        return <Redirect to="/" />
    }

    return (
    <div>
        <h1>{props.location.state.winner} has won!</h1>
        <Link to="/game" >Start again</Link>
    </div>
    );
}

export default End;

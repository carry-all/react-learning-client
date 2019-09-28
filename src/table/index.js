import React from 'react';
import Column from '../column'
import './index.css';

function Table(props) {
    return (
    <div>
        <p>Winner: {props.winner}</p>
        <p>Player: {props.currentPlayer}</p>
        <div className="rows">
        {
            props.field.map((column, i) => {
                return <Column id={i} column={column} onColumnPress={props.onColumnPress} />
            })
        }
        </div>
    </div>
    );
}

export default Table;

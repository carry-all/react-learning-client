import React from 'react';
import Cell from '../cell';
import './index.css';

function Column(props) {
    return (
    <div className="row" onClick={() => {props.onColumnPress(props.id)}}>
        {
            props.column.map((cell) => {
                return <Cell cell={cell} />
            })
        }
    </div>
    );
}

export default Column;

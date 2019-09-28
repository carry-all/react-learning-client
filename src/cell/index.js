import React from 'react';
import './index.css'

function Cell(props) {
    let cellStyle = "empty";
    if (props.cell === 1) {
        cellStyle = "first";
    } else if (props.cell === 2) {
        cellStyle = "second";
    }

    cellStyle += " cell"

    return (
    <div className={cellStyle}>
        {
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" />
  </svg>
        
        }
    </div>
    );
}

export default Cell;

import React from 'react';

function Hello(props) {
    function sayHello(name) {
        return 'Hello ' + name;
    }

    return (
    <div>
        <p onClick={props.onPress}>{sayHello(props.name)}</p>
    </div>
    );
}

export default Hello;

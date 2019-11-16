import React from 'react';
import PropTypes from 'prop-types';

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

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

Hello.defaultProps = {
    name: "somebody",
    onPress: () => {},
}

export default Hello;

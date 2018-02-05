import React from 'react';

import '../assets/styles/components/CircularButton.css';

const CircularButton = (props) => {
    
    const classNames = ['circular-button'];

    if(props.isBigger === true)
        classNames.push("is-bigger")

    return (
        <button className={classNames.join(' ')}>{props.children}</button>
    )
}

export default CircularButton;
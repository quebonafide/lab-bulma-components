import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
    console.log('aaaaa', props)
    return (
        <button className={props.className}>{props.children}</button>
    );

}

export default CoolButton;
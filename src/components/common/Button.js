import React from 'react';

// css
import '../../styles/css/Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;

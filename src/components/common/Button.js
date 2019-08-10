import React from 'react';

function Button(props) {
  return (
    <button onClick={props.submit}>Send</button>
  );
}

export default Button;

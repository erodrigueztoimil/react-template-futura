import React from 'react';

function Header(props) {
  return (
    <h3 style={{fontSize: '30px', paddingBottom: '15px'}}>{props.text}</h3>
  );
}

export { Header };

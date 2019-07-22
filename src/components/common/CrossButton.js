import React from 'react';
import Cross from '../../icons/cross_button.svg';

function CrossButton(props) {
  return (
    <img src={Cross} alt='Cross' onClick={props.click}/>
  );
}

export { CrossButton };

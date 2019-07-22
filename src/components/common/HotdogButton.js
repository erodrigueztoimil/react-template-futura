import React from 'react';
import Hotdog from '../../icons/hotdog_button.svg';

function HotdogButton(props) {
  return (
    <img src={Hotdog} alt='Hotdog' onClick={props.click}/>
  );
}

export { HotdogButton };

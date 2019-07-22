import React from 'react';
import { CrossButton, Links } from './';

function Screen(props) {
  return (
    <div className='screen'>
      <CrossButton click={props.click}/>
      <Links />
    </div>
  );
}

export { Screen };

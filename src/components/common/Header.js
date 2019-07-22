import React from 'react';
import { HotdogButton } from './';
import Facebook from '../../icons/facebook.svg';
import LinkedIn from '../../icons/linkedin.svg';

function Header(props) {
  return (
    <div className='header'>
      <div className='container'>
        <div className='social'>
          <img src={Facebook} alt='Facebook' />
          <img src={LinkedIn} alt='LinkedIn' />
        </div>
        <div className='name'>
          <h4>Futura Logistics</h4>
        </div>
        <div className='nav'>
          <HotdogButton click={props.click}/>
        </div>
      </div>
    </div>
  );
}

export { Header };

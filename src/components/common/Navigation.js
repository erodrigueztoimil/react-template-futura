import React from 'react';
import '../../styles/stylesheets/Navigation.css';
import { HotdogButton } from './';
import Name from '../../icons/name.svg';
import Facebook from '../../icons/facebook.svg';
import LinkedIn from '../../icons/linkedin.svg';

function Navigation(props) {
  return (
    <div className='navigation'>
      <div className='container'>
        <div className='social'>
          <img src={Facebook} alt='Facebook' style={styles.icon}/>
          <img src={LinkedIn} alt='LinkedIn' style={styles.icon}/>
        </div>
        <div className='name'>
          <img src={Name} alt='Name' style={styles.name}/>
        </div>
        <div className='button'>
          <HotdogButton click={props.handler} style={styles.icon}/>
        </div>
      </div>
    </div>
  );
}

const styles = {
  icon: {
    height: '25px'
  },
  name: {
    height: '30px'
  }
}

export { Navigation };

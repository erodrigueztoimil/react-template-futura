import React from 'react';

// css
import '../../styles/css/Navigation.css';

// component
import HotdogButton from '../common/HotdogButton';

// images
import Name from '../../icons/name.jpg';
import Facebook from '../../icons/facebook.svg';
import LinkedIn from '../../icons/linkedin.svg';

function Navigation(props) {
  return (
    <div className='navigation'>
      <div className='container'>
        <div className='social'>
          <a href='https://www.facebook.com/Futura-Logistics-Corp-154633071264977/'><img src={Facebook} alt='Facebook' style={styles.icon}/></a>
          <a href='https://www.linkedin.com'><img src={LinkedIn} alt='LinkedIn' style={styles.icon}/></a>
        </div>
        <div className='name'>
          <img src={Name} alt='Name' style={styles.name} />
        </div>
        <div className='button'>
          <HotdogButton click={props.click} style={styles.icon}/>
        </div>
      </div>
    </div>
  );
}

const styles = {
  icon: {
    height: '30px',
    cursor: 'pointer'
  },
  name: {
    height: '60px'
  }
}

export default Navigation;

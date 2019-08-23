import React from 'react';

// css
import '../../css/Navigation.css';

// component
import HotdogButton from '../common/HotdogButton';

// images
import Name from '../../icons/name.jpg';
import Facebook from '../../icons/facebook.svg';

function Navigation(props) {
  return (
    <div className='navigation'>
      <div className='container'>
        <div className='social'>
          <a href='https://www.facebook.com/Futura-Logistics-Corp-154633071264977/'><img src={Facebook} alt='Facebook' style={styles.facebook}/></a>
        </div>
        <div className='name'>
          <img src={Name} alt='Name' style={styles.name} />
        </div>
        <div className='button'>
          <HotdogButton click={props.click} style={styles.hotdog}/>
        </div>
      </div>
    </div>
  );
}

const styles = {
  facebook: {
    height: '25px'
  },
  hotdog: {
    height: '25px',
    cursor: 'pointer'
  },
  name: {
    height: '50px'
  }
}

export default Navigation;

import React from 'react';

// css
import '../../styles/css/Home.css';

// components
import Navigation from '../common/Navigation';
import Footer from './Footer';

// images
import Enrapture from '../../images/enrapture.jpg';

function Home(props) {
  return (
    <div className='home'>
      <Navigation click={props.click}/>
      <div className='image'>
        <img src={Enrapture} alt='Enrapture'/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

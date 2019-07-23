import React from 'react';
import '../../styles/stylesheets/Home.css';
import Enrapture from '../../images/enrapture.jpg';

function Home() {
  return (
    <div className='home'>
      <img src={Enrapture} alt='Enrapture'/>
    </div>
  );
}

export { Home };

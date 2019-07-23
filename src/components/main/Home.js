import React from 'react';
// import '../../styles/stylesheets/Home.css';
import Chuttersnap from '../../images/chuttersnap.jpg';

function Home() {
  return (
    <div className='home'>
      <img src={Chuttersnap} alt='Chuttersnap'/>
    </div>
  );
}

export { Home };

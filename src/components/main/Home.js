import React from 'react';
// import '../../styles/stylesheets/Home.css';
import Overpasses from '../../images/overpasses.jpg';

function Home() {
  return (
    <div className='home'>
      <img src={Overpasses} alt='Overpasses'/>
    </div>
  );
}

export { Home };

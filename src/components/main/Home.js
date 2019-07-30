import React from 'react';
import '../../styles/css/Home.css';
import Enrapture from '../../images/enrapture.jpg';
import { Information } from './';

function Home() {
  return (
    <div className='home'>
      <div className='image'>
        <img src={Enrapture} alt='Enrapture'/>
      </div>

      <div className='tracking'>
        <h3>Track Your Cargo</h3>
        <p>See where your merchandise is at every step of the way!</p>
        <a href="http://65.15.13.39/TrackingPage.aspx">TRACK</a>
      </div>

      <Information />
    </div>
  );
}

export { Home };

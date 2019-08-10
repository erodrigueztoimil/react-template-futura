import React from 'react';

// css
import '../../styles/css/Home.css';

// components
import Navigation from './/Navigation';
import About from './About';
import Information from './Information';
import Services from './Services';
import Contact from './Contact';
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
      <div className='tracking'>
        <h3>Track Your Cargo</h3>
        <p>See where your merchandise is at every step of the way!</p>
        <a href="http://65.15.13.39/TrackingPage.aspx">TRACK</a>
      </div>
      <Information />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

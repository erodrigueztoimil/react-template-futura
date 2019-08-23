import React from 'react';

// css
import '../../css/Home.css';

// components
import Navigation from './/Navigation';
import Tracking from './Tracking';
import Information from './Information';
import About from './About';
import Services from './Services';
import Blog from './Blog';
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
      <Tracking />
      <Information />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

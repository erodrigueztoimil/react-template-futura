import React from 'react';

// css
import '../../styles/css/Services.css';

// components
import Service from '../common/Service';
import Heading from '../common/Heading';

// images
import Shipping from '../../images/aerial.jpg';
import Customer from '../../images/alexander.jpg';
import International from '../../images/leon.jpg';
import Receiving from '../../images/bannon.jpg';

function Services() {
  return (
    <div className='services'>
      <Heading text='Services'/>

      <div className='content'>
        <Service
          src={Shipping}
          title='Shipping'
          text='Futura Logistics Corporation provides superior customer service and a fail safe system for receiving and shipping out products. Types of posts: Maritime, air and land.'
        />

        <Service
          src={Customer}
          title='Customer Services'
          text='On a warehouse operations level, we have made every effort to create a fail-safe system through our entire management system.'
        />

        <Service
          src={International}
          title='International Presence'
          text='We have a professional and outstanding reputation in the performance of supply chains and freight management in South America, Central America, Mexico and the Caribbean.'
        />

        <Service
          src={Receiving}
          title='Receiving'
          text='Futura Logistics Corp. verifies that what has been received by us is accurately placed into inventory and what is picked from inventory accurately matches what has been ordered.'
        />
      </div>
    </div>
  );
}

export default Services;

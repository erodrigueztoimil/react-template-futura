import React from 'react';

// css
import '../../css/Services.css';

// components
import Service from '../common/Service';

// images
import Shipping from '../../images/aerial.jpg';
import Customer from '../../images/alexander.jpg';
import International from '../../images/leon.jpg';
import Receiving from '../../images/bannon.jpg';

function Services() {
  return (
    <div className='services'>
      <h3>WHAT WE DO</h3>

      <div className='row'>
        <Service
          title='Shipping'
          src={Shipping}
          p='Futura Logistics Corporation provides superior customer service and a fail safe system for receiving and shipping out products. Types of posts: Maritime, air and land.'
        />
        <Service
          title='Customer Services'
          src={Customer}
          p='On a warehouse operations level, we have made every effort to create a fail-safe system through our entire management system.'
        />
      </div>

      <div className='row'>
        <Service
          title='International Presence'
          src={International}
          p='We have an outstanding reputation in the performance of supply chains and freight management in South America, Central America, Mexico and the Caribbean.'
        />
        <Service
          title='Receiving'
          src={Receiving}
          p='Futura Logistics Corp. verifies that what has been received by us is accurately placed into inventory and what is picked from inventory accurately matches what has been ordered.'
        />
      </div>
    </div>
  );
}

export default Services;

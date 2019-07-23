import React from 'react';
import '../../styles/stylesheets/About.css';
import Bandura from '../../images/bandura.jpg';

function About() {
  return (
    <div className='about'>
      <h3>Company</h3>
      <div className='content'>
        <img src={Bandura} alt='Bandura'/>
        <div className='paragraphs'>
          <p>
            When considering a logistics partner, experience is paramount. Our average facility is over 18,000 square feet and we have successfully implemented 50 start-ups. Our low management turnover means the knowledge gained from these start-ups is still on staff, ready to make your start-up a seamless one - on time and on budget.
          </p>
          <p>
            We offer a combination of several powerful tools that can help you manage your information, workforce, space, and time. We have experienced IT project managers on staff to guide you through the implementation for any of our solutions listed below. We offer competitive storage and service rates in addition to volume discounts. Long-term contracts are not required and there are no termination fees.
          </p>
          <p>
            Futura Logistics Corp, has information technology solutions to meet your supply chain needs, whether you need short-term arrangement requiring a small amount of warehouse space, a customer wishing to contract an entire building for a longer period of time, a means to capture labor and report it, manage your trailers on your yard, or better utilize your private fleet or common carrier transportation providers.
          </p>
        </div>
      </div>
    </div>
  );
}

export { About };

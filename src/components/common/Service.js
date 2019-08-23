import React from 'react';

function Service(props) {
  return (
    <div className='service'>
      <div className='box'>
        <div className='imgBx'>
          <img src={props.src} alt='cover'/>
        </div>
        <div className='content'>
          <h4>{props.title}</h4>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;

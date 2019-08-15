import React from 'react';

function Service(props) {
  return (
    <div className='service'>
      <img src={props.src} alt={props.src}/>
      <div className='desc'>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Service;

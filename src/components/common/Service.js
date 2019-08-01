import React from 'react';
import '../../styles/css/Service.css';
import Heading from './Heading';

function Service(props) {
  return (
    <div className='service'>
      <Heading text={props.heading}/>
      <p>{props.body}</p>
    </div>
  );
}

export { Service };

import React from 'react';

function Service(props) {
  return (
    <div className='service'>
      <img src={props.src}/>
      <div className='desc'>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export { Service };

import React from 'react';
import '../../styles/stylesheets/DetailsCard.css';

function DetailsCard(props) {
  return (
    <div className='details-card'>
      <h3>{props.header}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export { DetailsCard };

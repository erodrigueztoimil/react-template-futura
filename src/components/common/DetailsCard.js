import React from 'react';

function DetailsCard(props) {
  return (
    <div className='details-card' style={styles.parent}>
      <h3 style={styles.h3}>{props.header}</h3>
      <p style={styles.p}>{props.description}</p>
    </div>
  );
}

const styles = {
  parent: {
    padding: '25px',
    textAlign: 'center',
    color: '#fff'
  },
  h3: {
    fontSize: '30px'
  },
  p: {
    fontSize: '20px'
  }
}

export { DetailsCard };

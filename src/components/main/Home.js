import React from 'react';
import '../../styles/stylesheets/Home.css';
import { Navigation } from '../nav';

function Home() {
  return (
    <div className='home'>
      <Navigation />
      <div className='title'>
        <h3>Nation's Leading Providers</h3>
      </div>
    </div>
  );
}

export { Home };
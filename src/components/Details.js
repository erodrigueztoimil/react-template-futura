import React, {Component} from 'react';
import '../styles/stylesheets/Details.css';
import { DetailsCard } from './common';

//would like to clean the code a little bit, .map the infotmation so it genetates the card

class Details extends Component {
  render() {
    return (
      <div className='details'>
        <DetailsCard header='2004' description='Year Established'/>
        <DetailsCard header='18,000+' description='Yards of Warehouse Space'/>
        <DetailsCard header='50+' description='Facilities'/>
        <DetailsCard header='55%' description='of warehouse space is operated on flexible basis'/>
      </div>
    );
  }
}

export { Details }

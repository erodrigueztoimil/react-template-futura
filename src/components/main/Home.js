import React, {Component} from 'react';
import '../../styles/stylesheets/Home.css';
import { Header, Screen } from '../common';
import Overpasses from '../../images/overpasses.jpg';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState((state) => {
      return {
        clicked: !state.clicked
      }
    });
  }

  render() {
    if (this.state.clicked) {
      return (
        <div className='home'>
          <Screen click={this.clickHandler}/>
        </div>
      );
    }
    return (
      <div className='home'>
        <Header click={this.clickHandler}/>
        <div className='image'>
          <img src={Overpasses} alt='Overpasses'/>
        </div>
      </div>
    );
  }
}

export { Home };

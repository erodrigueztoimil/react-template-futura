import React, {Component} from 'react';
import '../styles/stylesheets/App.css';
import { Navigation, Screen } from './common';
import { Home, About, Information, Services } from './main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      buttonClicked: false
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState((state) => {
      return {
        buttonClicked: !state.buttonClicked
      }
    });
  }

  render() {
    return (
      <div className='app'>
        { this.state.buttonClicked ?
          <Screen click={this.clickHandler}/> :
          <div className='app'>
            <Navigation handler={this.clickHandler}/>
            <div className='content'>
              <Home />
              <About />
              <Information />
              <Services />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;

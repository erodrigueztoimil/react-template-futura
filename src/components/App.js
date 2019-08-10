import React, { Component } from 'react';

// css
import '../styles/css/App.css';

// components
import Home from './main/Home';
import Screen from './common/Screen';

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
          <Home click={this.clickHandler}/>
        }
      </div>
    );
  }
}

export default App;

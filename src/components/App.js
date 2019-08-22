import React, { Component } from 'react';

// css
import '../css/App.css';

// components
import Home from './main/Home';
import Screen from './common/Screen';

class App extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className='app'>
        { this.state.open ?
          <Screen click={this.clickHandler}/> :
          <Home click={this.clickHandler}/>
        }
      </div>
    );
  }
}

export default App;

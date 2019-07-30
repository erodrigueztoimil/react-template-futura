import React, {Component} from 'react';
import '../styles/css/App.css';
import { Navigation, Screen } from './common';
import { Home, About, Services, Blog, Contact, Footer } from './main';
import { BrowserRouter, Route } from 'react-router-dom';

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
      <div className='parent'>
        { this.state.buttonClicked ?
          <Screen click={this.clickHandler}/> :
          <BrowserRouter>
            <div className='app'>
              <Navigation handler={this.clickHandler}/>
              <Route exact path='/' component={ Home }/>
              <Route exact path='/Home' component={ Home }/>
              <Route path='/About' component={ About }/>
              <Route path='/Services' component={ Services }/>
              <Route path='/Blog' component={ Blog }/>
              <Route path='/Contact' component={ Contact }/>
              <Footer />
            </div>
          </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;

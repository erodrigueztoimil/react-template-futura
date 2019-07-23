import React, {Component} from 'react';
import '../styles/stylesheets/App.css';
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
      <div className='app'>
        { this.state.buttonClicked ?
          <Screen click={this.clickHandler}/> :
          <BrowserRouter>
            <div className='app'>
              <Navigation handler={this.clickHandler}/>
              <Route exact path='/Home' component={ Home }/>
              <Route exact path='/About' component={ About }/>
              <Route exact path='/Services' component={ Services }/>
              <Route exact path='/Blog' component={ Blog }/>
              <Route exact path='/Contact' component={ Contact }/>
              <Footer />
            </div>
          </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;

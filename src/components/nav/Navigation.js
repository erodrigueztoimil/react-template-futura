import React, {Component} from 'react';
import '../../styles/stylesheets/Navigation.css';
import { Bar, Drawer, Backdrop } from './';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      drawerShowing: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      drawerShowing: !this.state.drawerShowing
    });
  }

  render() {
    let backdrop;

    if (this.state.drawerShowing) {
      backdrop = <Backdrop click={this.clickHandler}/>
    }

    return (
      <div className='navigation'>
        <Bar click={this.clickHandler}/>
        <Drawer show={this.state.drawerShowing}/>
        {backdrop}
      </div>
    );
  }
}

export { Navigation };

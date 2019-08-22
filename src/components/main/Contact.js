import React, { Component } from 'react';

// css
import '../../css/Contact.css';

// icon
import At from '../../icons/at.svg';

// component
import Form from '../common/Form';
import Button from '../common/Button';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className='contact'>
        { this.state.open ?
          <Form /> :
          <div className='container'>
            <img src={At} alt='contact'/>
            <p>
              If you have any questions, please browse our blog, we might have the information you need there. For any further inquiries, please feel free to reach us!
            </p>
            <Button
              onClick={this.clickHandler}
              text='CONTACT'
            />
          </div>
        }
      </div>
    );
  }
}

export default Contact;

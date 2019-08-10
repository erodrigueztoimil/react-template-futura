import React, { Component } from 'react';

// css
import '../../styles/css/Contact.css';

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
          <form>
            <h3>form</h3>
          </form> :
          <div className='container'>
            <h3>CONTACT</h3>
            <p>
              If you have any questions, please browse our blog, we might have the information you need there. For any further inquiries, please feel free to reach us!
            </p>
            <button onClick={this.clickHandler}>Contact Us</button>
          </div>
        }
      </div>
    );
  }
}

export default Contact;

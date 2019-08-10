import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    }

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    console.log(this.props.formValues);
  }

  render() {
    let recipient = `mailto:${this.props.email}`;
    let subject = '?subject=Website Inquirie%20Client';
    let body = `&body=${this.props.formValues.message}`;
    return (
      <a href={`${recipient}${subject}${body}`} onClick={this.submitForm}>Send</a>
    );
  }
}

export default Button;

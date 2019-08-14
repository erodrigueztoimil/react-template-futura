import React, { Component } from 'react';

// components
import Field from '../common/Field';
import Button from '../common/Button';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
      sent: false
    }

    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  submitForm() {
    this.setState({
      sent: !this.state.sent
    });
  }

  render() {
    return (
      <form>
        <h3>CONTACT</h3>
        <Field
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
          placeholder='name'
        />
        <Field
          onChange={(event) => this.updateField('phone', event.target.value)}
          value={this.state.phone}
          placeholder='phone'
        />
        <Field
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
          placeholder='email'
          email
        />
        <Field
          onChange={(event) => this.updateField('message', event.target.value)}
          value={this.state.message}
          placeholder='message'
          textarea
        />
        <Button
          formValues={this.state}
          email='erodrigueztoimil@gmail.com'
          onClick={this.submitForm}
          text='Send'
        />
      </form>
    );
  }
}

export default Form;

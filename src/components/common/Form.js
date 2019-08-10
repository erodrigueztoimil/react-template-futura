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
      message: ''
    }

    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
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
        />
      </form>
    );
  }
}

export default Form;

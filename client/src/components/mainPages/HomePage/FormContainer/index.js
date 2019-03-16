import React from 'react';
import Form from './Form';
import './style.css';

class FormContainer extends React.Component {
  render() {
    return (
      <div>
        <Form />

        <p>{this.props.client}</p>
      </div>
    );
  }
}

export default FormContainer;

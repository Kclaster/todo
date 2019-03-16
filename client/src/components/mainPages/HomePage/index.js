import React from 'react';
import FormContainer from './FormContainer';
import ReviewContainer from './ReviewContainer';
import Navbar from '../../features/Navbar';
import './style.css';

class HomePage extends React.Component {
  constructor() {
    super(props);
    this.state = {
      name: 'John'
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <FormContainer client={this.state.name} />
        <ReviewContainer />
      </div>
    );
  }
}

export default HomePage;

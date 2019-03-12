import React from 'react';
import FormContainer from './FormContainer';
import ReviewContainer from './ReviewContainer';
import Navbar from '../../features/Navbar';
import './style.css';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormContainer />
        <ReviewContainer />
      </div>
    );
  }
}

export default HomePage;

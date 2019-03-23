import React from 'react';
import './style.css';

class ReviewContainer extends React.Component {
  render() {
    return <div className="review-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h1>Review container Test</h1>
      <ul>
        <h2>Star Rating</h2>
       <li>User1<span class="fa fa-star checked"></span></li>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      
      </ul>
    </div>;
  }
}

export default ReviewContainer;

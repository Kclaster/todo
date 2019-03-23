import React from 'react';
import './style.css';
import Review from './Review'
import Users from '../../../../data/users';

class ReviewContainer extends React.Component {

  render() {
    return <div className="review-container">
      {Users.map(cur => {
        return <Review
          user={cur.userName}
          rating={cur.userRating}
          description={cur.userReview}
        />
      })}
    </div>;
  }
}

export default ReviewContainer;

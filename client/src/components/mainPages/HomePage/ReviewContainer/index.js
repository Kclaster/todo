import React from 'react';
import Review from './Review';

class ReviewContainer extends React.Component {
  constructor() {
    super(props);
    this.state = {
      name =['bob', 'mow lawn']
    }
  }


randomNumberyo() {
  return 5
}



  render() {
    return (
      <div>
        <Review name={this.state[this.randomNumberyo()]}/>
        <Review />
        <Review />
        <Review />
      </div>
    );
  }
}

export default ReviewContainer;

import React from 'react';


class Review extends React.Component {

  render() {
    return <div>
       <div class="review">
          <h1>{this.props.user}</h1>
          <div>{this.props.rating}</div>
          <p>{this.props.description}</p>
        </div>
    </div>;
  }
}

export default Review;

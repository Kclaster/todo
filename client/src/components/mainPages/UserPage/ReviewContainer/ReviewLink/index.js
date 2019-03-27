import React from 'react';
import './style.css';
import FormComponent from './star'


class ReviewLink extends React.Component {
  constructor(props) {
    super(props);

    // fetch(window.location.origin + '/users')
    //   .then(users => {


    this.state = {
      value: 'Leave a review....'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="userpage-review" >
        <form onSubmit={this.handleSubmit}>
          <h1>Leave a review</h1>
          <label>
           <h3>Comments:</h3>
          <textarea rows="4" cols="50" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div id="star-rating" className="stars">
          {/* <FormComponent /> */}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
              <p>Star Rating:</p>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}

export default ReviewLink;

import React from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ReactStars from 'react-stars'


class ReviewLink extends React.Component {
  constructor(props) {
    super(props);

    // fetch(window.location.origin + '/users')
    //   .then(users => {


    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userid = this.props.userid;
    let { userName, comments, stars, reviewed } = this.state;
    let post = {
      userName,
      comments,
      stars,
      reviewed,
    }
  }

  

  render() {
    return (

      <div className="userpage-review">
      <h3>Leave a comment for.....</h3>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-multiline-flexible"
            label="Leave a review"
            multiline
            rowsMax="6"
            value={this.state.value}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined" />
          <ReactStars count={5}
            size={24} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ReviewLink;

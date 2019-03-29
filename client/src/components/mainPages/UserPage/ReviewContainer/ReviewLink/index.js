import React from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ReactStars from 'react-stars';
import axios from 'axios';






class ReviewLink extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      userId: '2',
      name: '',
      stars: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {
    console.log(event);
    const target = event.target.value;
    const name = this.state.name + target
    this.setState({
      name: target,
    });
  }

  handleSubmit(event) {
    event.preventDefault(event);
    let { userId, name, stars } = this.state;
    let post = {
      userId,
      name,
      stars,

    }


    axios.post('/user/reviews', post)
      .then(res => {
        console.log("post to user" + res)
      })
      .catch(err =>{
        console.log(err)
      })

  }

  handleStarChange = stars =>{
    this.setState({stars}, () => console.log(this.state.stars))
  }

 

  


  render() {
    console.log(this.state)
    return (

      <div className="userpage-review">
        <h3>Leave a comment for.....</h3>
        <form onSubmit={this.handleSubmit} >
          <TextField
            id="outlined-multiline-flexible"
            label="Leave a review"
            multiline
            rowsMax="6"
            value={this.state.value}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined" />
          <ReactStars onChange={(value) => this.handleStarChange(value)} count={5}
            size={24} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ReviewLink;

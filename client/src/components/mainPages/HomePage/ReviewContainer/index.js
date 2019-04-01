import React from 'react';
import './style.css';
import Review from './Review'
import { json } from 'body-parser';
// import axios from "../../../features/axios"
// import { getUser } from '../../../axios';
// import Router from '../../../../../../routes/'
import Users from '../../../../data/users';

import About from '../AboutContainer/About';
import axios from 'axios';
import showChild from './showChild';





class ReviewContainer extends React.Component {


  constructor() {
    super()

    this.state = {
      arr: null,
      displayChild: false
    }


    this.aboutContent1 = {
      header: 'Why TaskBidder',
      text: "How much is your time really worth? For many Americans, time is in short supply. Whether it's balancing between your busy work schedual, or full social life or simply watching after a family, it can get tough to check off every chore on your to do list. TaskBidder allows for you to put those pesky time consuming chores up for sale, and allows other to become the extra hands you need! You have tasks that needs to get done and there are people willing to do them",
    }

    //"We believe laziness drives the American economy, and why shouldn't it? You have tasks that needs to get done and there are people willing to do them. "


    this.aboutContent2 = {
      header: 'How to use TaskBidder',
      text: 'TaskBidder is simple to use! Simply create a task with a fair starting bid and send it off to our marketplace. Other users will bid for your task! At the end, you both leave reviews about each other and the quality of work done, which helps users build positive ratings, and allows everyone to maintain a great evironment',
    }


  }



  componentDidMount() {
    axios.get('/user')
      .then(users => {
        this.setState({
          arr: users.data,
          displayChild: true
        })



      })
  }





  render() {
    let display;
    if (this.state.displayChild) {
      display =
        <div className="review-container">
          <Review users={(this.state.arr) ? this.state.arr.slice(0, 3) : null} />
          <About content={this.aboutContent1} />
          <About content={this.aboutContent2} />
          <Review users={(this.state.arr) ? this.state.arr.slice(3, 6) : null} />
        </div>
    } else {
      display = null
    }
    return <div className="review-container">
    {display}
    </div>

  }
}






export default ReviewContainer;

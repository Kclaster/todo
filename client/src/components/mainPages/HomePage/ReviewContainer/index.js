import React from 'react';
import './style.css';
import Review from './Review'
import { json } from 'body-parser';
// import axios from "../../../features/axios"
// import { getUser } from '../../../axios';
// import Router from '../../../../../../routes/'
import Users from '../../../../data/users';

import About from '../AboutContainer/About';


console.log(Users);


class ReviewContainer extends React.Component {


constructor(){
  super()

  this.state = {
    arr1: [],
    arr2: [],
  }

  this.aboutContent1 ={
    header: 'Why TaskBidder',
    text: "We believe laziness drives the American economy, and why shouldn't it? You have tasks that needs to get done and there are people willing to do them. ",
  }

  this.aboutContent2 ={
    header: 'How to use TaskBidder',
    text: 'TaskBidder is simple to use! Simply create a task with a fair starting bid and let others bid lower to try and win that task. ',
  }

  
}

// fetch(window.location.origin + '/api' + '/users')
// .then(users => {

//   const arr1 = users.filter((user, index) => {
//     return index >2;
//   })
//   const arr2 = users.filter((user, index) => {
//     return index <= 2;
//   })
//   this.setState({
//     arr1: arr1,
//     arr2: arr2,
//   })
// })


componentDidMount() {
  const arr1 = Users.filter((user, index) => {
    return index >2;
  })
  const arr2 = Users.filter((user, index) => {
    return index <= 2;
  })
  

  this.setState({
    arr1: arr1,
    arr2: arr2,
  })
}



  render() {

    
    return <div className="review-container"> 
    <Review  users={this.state.arr1}/>
    <About content={this.aboutContent1} />
    <About content={this.aboutContent2}/>
    <Review  users={this.state.arr2}/>
    </div>
    
  }
}
    export default ReviewContainer;

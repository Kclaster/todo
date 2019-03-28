import React from 'react';
import Footer from '../../../../features/Footer';
import Link from './Link';
import './style.css'



const Review = (props) => {
  console.log(props)
return (
    <div className="tile review-tile">
      {props.users.map((user, index) => {
        return <Link key={index} user={user} />
      })}


    </div>
  )
}

export default Review;

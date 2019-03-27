import React from 'react';
import './style.css'


const Link = (props) => {

  const user = props.user;
  return (<div>
    <div className="review-child review-tile">
      <h1 className="userName">{user.userName}</h1>
      <h4>{user.userRating}&#9733; &#9733;&#9733; &#9733;</h4>
      <p>{user.userReview}</p> 
        </div>
  </div>
  )
}

export default Link;
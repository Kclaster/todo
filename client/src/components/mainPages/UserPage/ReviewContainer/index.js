import React from 'react';
import ReviewLink from './ReviewLink';
import './style.css';
import Card from '@material-ui/core/Card';

class UserPage extends React.Component {

  render() {
    return (
      <div className="reviewlink-container">
      <Card>
      <ReviewLink />
      </Card>
      </div>)
  }
}

export default UserPage;

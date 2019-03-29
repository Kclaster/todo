import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { signIn, signOut } from '../../../../redux/actions';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import SignIn from './signIn';

class NavBar extends React.Component {
  handleClick = () => {
    this.props.signIn('bob');
  };

  render() {
    return (
      <div className="nav-container">
        <button onClick={this.handleClick}>User Page</button>
        <button onClick={this.props.signOut}>Home Page</button>
        {/* <Button href="/user" className="link">
          userpage
        </Button>
        <Button href="/todo/home" className="link">
          home
        </Button> */}
        <SignIn />
      </div>
    );
  }
}

export default connect(
  null,
  { signIn, signOut }
)(NavBar);

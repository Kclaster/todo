import React from 'react';
import './style.css';

import SignIn from './signIn';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <button>HomePage</button>
          <button>UserPage</button>
        </div>
        <SignIn />
      </div>
    );
  }
}

export default NavBar;

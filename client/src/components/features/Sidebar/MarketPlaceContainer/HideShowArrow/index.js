import React from 'react';
import './style.css';

const HideShowArrow = props => {
  return (
    <div
      onClick={props.toggleSidebar}
      className={`arrow ${props.showSideBar ? 'left-arrow' : 'right-arrow'}`}
    />
  );
};

export default HideShowArrow;

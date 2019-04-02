import React from 'react';
import coolpic from '../../../pictures/githubicon.png';
import './style.css';
import { withStyles } from '@material-ui/core/styles';



const styles = ({
  height: {
    height: "25px",
    width: "25px",
  },
});


const Footer = (props) => {
  const { classes } = props;
    return (
      <div className="footer">
      <div>
        <img className={classes.height} src={coolpic} alt="icon"/></div>
        <p className="copyright">&nbsp;© 2019 TaskBidder - The Dream Team </p>
      </div>
    );
  }

export default withStyles(styles)(Footer);

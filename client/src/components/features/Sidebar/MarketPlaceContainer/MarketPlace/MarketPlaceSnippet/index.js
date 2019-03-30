import React from 'react';
import './style.css';
import moment from 'moment';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

class MarketPlaceSnippet extends React.Component {
 constructor(props){
   super(props);
   this.state ={
     todaysDate: new Date(),
     expireDate: this.props.expiration,
     isAfter: null,
     newBid: 0
   };
 }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (prevProps.expiration !== nextProps.expiration) {
      return {
        isAfter: moment(new Date()).isAfter(nextProps.expiration)
      };
    }
  }

  render() {
  return (
    <div className="market-snippet-container">
 <ExpansionPanelSummary >
     <ExpansionPanelDetails>
          <Typography>
      <h3 className="market-title-link" onClick={this.props.toggleSnippet}>
        {this.props.title}
      </h3>
      <h4>Expiration: {this.props.expiration}</h4>
      <h4>Current Bid: {this.props.startingBid}</h4>
      <p>Description: {this.props.description}</p>
      <form>
        <input
          onChange={e => this.props.handleChange(e)}
          type="text"
          placeholder="Your Bid"
          />
        <button type="submit">Submit Bid</button>
      </form>
          </Typography>
        </ExpansionPanelDetails>
        </ExpansionPanelSummary>
    </div>
  );
  };
};

export default MarketPlaceSnippet;

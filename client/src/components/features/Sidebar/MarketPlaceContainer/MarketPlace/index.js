import React from 'react';
import MarketPlaceSnippet from './MarketPlaceSnippet';
import MarketTitleLink from './MarketTitleLink';
import './style.css';

class MarketPlace extends React.Component {
  constructor() {
    super();
    this.state = {
      showSnippet: false
    };
  }

  toogleSnippet = () => {
    this.setState({
      showSnippet: !this.state.showSnippet
    });
  };

  render() {
    return (
      <div className="marketplace">
        {this.state.showSnippet ? (
          <MarketPlaceSnippet
            toggleSnippet={this.toogleSnippet}
            title={this.props.title}
            description={this.props.description}
            userId={this.props.userId}
            startingBid={this.props.startingBid}
          />
        ) : (
          <MarketTitleLink
            toggleSnippet={this.toogleSnippet}
            title={this.props.title}
          />
        )}
      </div>
    );
  }
}

export default MarketPlace;

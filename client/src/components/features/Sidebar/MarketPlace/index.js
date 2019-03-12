import React from 'react';
import MarketPlaceSnippet from './MarketPlaceSnippet';
import MarketTitleLink from './MarketTitleLink';
import './style.css';

class MarketPlaceContainer extends React.Component {
  render() {
    return (
      <div>
        <MarketTitleLink />
        <MarketPlaceSnippet />
      </div>
    );
  }
}

export default MarketPlaceContainer;

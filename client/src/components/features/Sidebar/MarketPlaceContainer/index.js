import React from 'react';
import MarketPlace from './MarketPlace';
import './style.css';

const MarketPlaceContainer = props => {
  const displayLinks = !props.data
    ? null
    : props.data.map(cur => {
        return (
          <MarketPlace
            expiration={cur.expiration_date}
            userId={cur.userId}
            description={cur.description}
            startingBid={cur.best_bid}
            title={cur.title}
            taskId={cur.taskId}
          />
        );
      });

  return (
    <div className="scrollingConatiner">
      <ul>{displayLinks}</ul>
    </div>
  );
};

export default MarketPlaceContainer;

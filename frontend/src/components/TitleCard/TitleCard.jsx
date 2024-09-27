import React from 'react';
import './TitleCard.css';

const TitleCard = () => {
  return (
    <div className="title-card">
      <h1>Higher or Lower: Country Populations</h1>
      <div className="game-info">
        <h3>How to play:</h3>
        <p>Click higher or lower depending on whether you think the country on the right has a higher or lower population than the country on the left.</p>
      </div>
    </div>
  );
};

export default TitleCard;

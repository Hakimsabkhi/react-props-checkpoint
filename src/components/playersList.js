
import React from 'react';
import Player from './player';
import playersData from '../data/playersData';

function PlayersList() {
  return (
    <div className="players-list-container">
      {playersData.map((player, index) => (
        <Player
          key={index}
          {...player}
        />
      ))}
    </div>
  );
}

export default PlayersList;

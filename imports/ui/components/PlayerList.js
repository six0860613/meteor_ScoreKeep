import React from 'react';
import Player from './Player';

function PlayerList(props) {
  const { playerData } = props;
  return (
    <>
      {playerData.length === 0 ? (
        <p>Add a player to get start!</p>
      ) : (
        playerData.map((v) => {
          return (
            <Player
              key={v._id}
              _id={v._id}
              name={v.name}
              score={v.score}
            />
          );
        })
      )}
      {}
    </>
  );
}

export default PlayerList;

import React from 'react';
import FlipMove from 'react-flip-move';

import Player from './Player';

function PlayerList(props) {
  const { playerData } = props;
  return (
    <>
      {playerData.length === 0 ? (
        <div className="list-item">
          <div className="item__message">
            Add a player to get start!
          </div>
        </div>
      ) : (
        <FlipMove maintainContainerHeight="true">
          {playerData.map((v) => {
            return (
              <div key={v._id}>
                <Player
                  _id={v._id}
                  name={v.name}
                  score={v.score}
                  rank={v.rank}
                  position={v.position}
                />
              </div>
            );
          })}
        </FlipMove>
      )}
    </>
  );
}

export default PlayerList;

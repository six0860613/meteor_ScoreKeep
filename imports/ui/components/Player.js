import React from 'react';
import { Players_API } from '../../api/players';

function Player(props) {
  const { _id, name, score } = props;
  return (
    <>
      <p>
        {name} : {score} point(s)
        <button
          onClick={() => {
            Players_API.update(
              { _id: _id },
              { $inc: { score: -1 } }
            );
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            Players_API.update(
              { _id: _id },
              { $inc: { score: 1 } }
            );
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            Players_API.remove({ _id: _id });
          }}
        >
          X
        </button>
      </p>
    </>
  );
}

export default Player;

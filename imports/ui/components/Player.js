import React from 'react';
import { Players_API } from '../../api/players';

function Player(props) {
  const { _id, name, score, rank, position } = props;
  const listItemClass = `list-item item--position-${rank}`;
  return (
    <>
      <div className={listItemClass}>
        <div className="player">
          <div>
            <div className="player__name">{name}</div>
            <div className="player__score">
              {position} - {score} point(s)
            </div>
          </div>
          <div className="player__actions">
            <button
              className="btn btn--round"
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
              className="btn btn--round"
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
              className="btn btn--round"
              onClick={() => {
                Players_API.remove({ _id: _id });
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;

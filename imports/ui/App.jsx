import React, { useState } from 'react';

import { useTracker } from 'meteor/react-meteor-data';
import { Players } from '../api/players';

export const App = () => {
  const players = useTracker(() => {
    return Players.find().fetch();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let playerName = e.target.playername.value;
    if (playerName) {
      e.target.playername.value = '';
      Players.insert({
        name: playerName,
        score: 0,
      });
    }
  };
  return (
    <div>
      <h1>Score Keep</h1>
      <h2>Insert Players</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="playername"
          placeholder="Player Name"
        />
        <button type="submit">Add Player</button>
      </form>
      {players.map((v) => {
        return (
          <p key={v._id}>
            {v.name} : {v.score} point(s)
            <button
              onClick={() => {
                Players.update(
                  { _id: v._id },
                  { $inc: { score: -1 } }
                );
              }}
            >
              -1
            </button>
            <button
              onClick={() => {
                Players.update(
                  { _id: v._id },
                  { $inc: { score: 1 } }
                );
              }}
            >
              +1
            </button>
            <button
              onClick={() => {
                Players.remove({ _id: v._id });
              }}
            >
              X
            </button>
          </p>
        );
      })}
    </div>
  );
};

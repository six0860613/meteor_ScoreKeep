import React from 'react';
import { Players_API } from '../../api/players';

function AddPlayer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let playerName = e.target.playername.value;
    if (playerName) {
      e.target.playername.value = '';
      Players_API.insert({
        name: playerName,
        score: 0,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="playername"
          placeholder="Player Name"
        />
        <button type="submit">Add Player</button>
      </form>
    </>
  );
}

export default AddPlayer;

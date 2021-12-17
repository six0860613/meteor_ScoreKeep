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
    <div className="list-item">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="playername"
          placeholder="Player Name"
        />
        <button className="btn" type="submit">
          Add Player
        </button>
      </form>
    </div>
  );
}

export default AddPlayer;

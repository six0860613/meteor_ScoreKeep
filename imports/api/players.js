import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

export const Players_API = new Mongo.Collection('players');

export const calcPlayerPositions = (player_arr) => {
  let rank = 1;
  return player_arr.map((v, i) => {
    if (i !== 0 && player_arr[i - 1].score > v.score) {
      rank++;
    }
    return {
      ...v,
      rank,
      position: numeral(rank).format('0o'),
    };
  });
};

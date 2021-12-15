import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Players } from '../api/players';

const data = [
  {
    _id: 1,
    name: 'Alex',
    score: 99,
  },
  {
    _id: 2,
    name: 'Ben',
    score: 40,
  },
  {
    _id: 3,
    name: 'Cathy',
    score: 75,
  },
];

Tracker.autorun(() => {
  console.log('Players', Players.find().fetch());
});

export const App = () => (
  <div>
    <h1>Score Keep</h1>
    {data.map((v) => {
      return (
        <p key={v._id}>
          {v.name} gets {v.score}
        </p>
      );
    })}
  </div>
);

import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
  Players.insert({
    name: 'Ben',
    score: 60,
  });
  console.log(Players.find().fetch());
});

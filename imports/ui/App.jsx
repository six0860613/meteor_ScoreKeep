import React, { useState } from 'react';

import { useTracker } from 'meteor/react-meteor-data';
import TitleBar from './components/TitleBar';
import AddPlayer from './components/AddPlayer';
import PlayerList from './components/PlayerList';

import { Players_API } from '../api/players';

export const App = () => {
  const players = useTracker(() => {
    // mongo語法使用 find查詢
    return Players_API.find(
      {}, //第一參數預設為查詢，如果只要用sort功能，必須放一個空物件來表示
      {
        sort: { score: -1 },
      }
    ).fetch();
  });

  return (
    <>
      <TitleBar />
      <AddPlayer />
      <PlayerList playerData={players} />
    </>
  );
};

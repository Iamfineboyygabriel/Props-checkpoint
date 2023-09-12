import React from 'react';
import PlayersList from './PlayersList';
import "./App.css"


const App = () => {
  return (
    <div className='player'>
      <h1 >
 Player List</h1>
      <PlayersList />
      
    </div>
  );
};

export default App;
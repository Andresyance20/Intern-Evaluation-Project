import React, { useState } from 'react';
import '../css/App.css';
import Header from "../js/Header";
import Listing from "../js/Listing";
import Filter from "../js/Filter";
import useTeamsFilter from "../js/getTeams-filter";

function App() {
  const [league, setLeague] = useState('');
  const [division, setDivision] = useState('');
  const teams = useTeamsFilter(league, division);

  const handleLeagueChange = (event) => {
    setLeague(event.target.value);

    setDivision(''); 
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };


  return (
    <div className="App">
      <div className="top-container">
        <Header />
        <Filter 
          onLeagueChange={handleLeagueChange} 
          onDivisionChange={handleDivisionChange}
          league={league}
          division={division}
        />
      </div>
      <Listing teams={teams} />
    </div>
  );

}

export default App;

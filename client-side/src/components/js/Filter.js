import React from 'react';
import '../css/Filter.css';

const Filter = ({ onLeagueChange, onDivisionChange, league, division }) => {
  const divisions = {
    'American League': ['East', 'Central', 'West'],
    'National League': ['East', 'Central', 'West'],
  };

  return (
    <div className="filter-container">
      <select className="filter-dropdown" onChange={onLeagueChange} value={league}>
        <option value="">All Leagues</option>
        <option value="American League">American League</option>
        <option value="National League">National League</option>
      </select>
      {league && (

     <select className="filter-dropdown" onChange={onDivisionChange} value={division}>
     <option value="">All Divisions</option>
     {divisions[league].map((divisionName) => (
       <option key={divisionName} value={`${league} ${divisionName}`}>
         {divisionName}
       </option>
     ))}
   </select>
   
   

      )}
    </div>
    
    
  );
};

export default Filter;

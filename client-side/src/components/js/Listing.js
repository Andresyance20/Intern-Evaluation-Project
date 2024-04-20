import React from 'react';
import TeamCard from '../js/TeamCard';
import '../css/Listing.css';

const Listing = ({ teams }) => {
  // Check if teams is not an object or is empty
  if (!teams || (typeof teams === 'object' && Object.keys(teams).length === 0)) {
    return <div>Loading teams or no teams available...</div>;
  }

  // Flatten the teams object into an array for rendering
  let teamsArray = [];
  if (Array.isArray(teams)) {
    // If teams is already an array, use it directly
    teamsArray = teams;
  } else {
    // If teams is an object, flatten it
    Object.values(teams).forEach(divisionTeams => {
      if (Array.isArray(divisionTeams)) {
        teamsArray = teamsArray.concat(divisionTeams);
      } else {
        // If the divisions are also objects, flatten further
        Object.values(divisionTeams).forEach(team => {
          teamsArray = teamsArray.concat(team);
        });
      }
    });
  }

  return (
    <div className="listing">
      {teamsArray.map(team => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default Listing;

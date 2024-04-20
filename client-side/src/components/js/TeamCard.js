import React from 'react';
import '../css/TeamCard.css';



const TeamCard = ({ team }) => {
    if (!team) return null; 
  
    return (
      <div className="team-card">
        <img src={team.logo} alt={`${team.name} Logo`} />
        <h3>{team.name ?? 'Unknown Team'}</h3>
        <p>{team.location ?? 'No location available'}</p>
        <p>{team.abbreviation ?? 'No available'}</p>
      </div>
    );
  };
  
export default TeamCard;

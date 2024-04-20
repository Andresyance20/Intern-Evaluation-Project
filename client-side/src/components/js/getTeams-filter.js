import { useState, useEffect } from 'react'; 
import axios from 'axios'; 

// Custom React hook to fetch MLB teams based on league and division
function useTeamsFilter(league, division) {
  // State to store the list of MLB teams
  const [teams, setTeams] = useState([]); 
  
  // Base URL for your backend API
  const baseURL = `http://localhost:5000/api/mlb/teams`;

  // useEffect to fetch teams when league or division changes
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const params = {}; // Object to hold query parameters
        
        // Add league and division to query parameters if provided
        if (league) params.league = league; 
        if (division) params.division = division;

        // Make a GET request to the API with query parameters
        const response = await axios.get(baseURL, { params });

        setTeams(response.data); // Update the state with the fetched teams
      } catch (error) {
        // Handle errors and log them to the console
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams(); // Call the function to fetch teams
  }, [league, division, baseURL]); // Dependencies to watch for changes

  // Return the current list of teams
  return teams;
}

export default useTeamsFilter; // Export the custom hook for use in other components

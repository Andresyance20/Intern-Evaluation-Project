const axios = require('axios');  

// Service to retrieve and filter MLB teams based on league and division
const getFilteredTeams = async (league, division) => {
    const apiUrl = 'http://brew-roster-svc.us-e2.cloudhub.io/api/teams'; // External API endpoint for MLB teams
    const apiKey = process.env.APP_API_KEY; // Retrieve the API key from environment variables

    const response = await axios.get(apiUrl, { headers: {'api-key': apiKey} });
    const teams = response.data;

    let filteredTeams = teams; // Initialize the filtered teams variable with all teams

    // Filter teams by league if a specific league is specified
    if (league) {
        filteredTeams = filteredTeams.filter(team => team.leage === league);

    }

     // Further filter teams by division if a specific division is specified
    if (division) {
        filteredTeams = filteredTeams.filter(team => team.division === division);
    }

    // Group the filtered teams by league and division
    return groupTeams(filteredTeams); 
};

// Function to group teams by league and division
const groupTeams = (teams) => {
    return teams.reduce((groupedTeams, team) => {
        const league = team.leage;  
        const division = team.division;

        // Initialize the nested structure for grouping if it doesn't exist
        if (!groupedTeams[league]) {
            groupedTeams[league] = {}; // create an object for the league
        }
        if (!groupedTeams[league][division]) {
            groupedTeams[league][division] = []; // Create an array for the division
        }

        // Add the team to the appropriate league and division
        groupedTeams[league][division].push(team);
        return groupedTeams; // Return the grouped teams object
    }, {});
};




module.exports = {
    getFilteredTeams
};

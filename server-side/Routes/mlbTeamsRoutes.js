const express = require('express');
const router = express.Router();
const mlbTeamsService = require('../Service/mlbTeamsService'); // import the neccesary service

// Endpoint to get MLB teams, with optional filtering by league and division
router.get('/teams', async (req, res) => {
    try {
        const { league, division } = req.query; // Capture league and division from query parameters
        const teams = await mlbTeamsService.getFilteredTeams(league, division); //Fetch filtered teams from the MLB teams service

        res.json(teams); //Return the teams as a JSON response

    } catch (error) {
        res.status(500).json({ message: 'Error fetching MLB teams', error: error.message }); // error response
    }
});




module.exports = router;

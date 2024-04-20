const express = require('express');
const mlbTeamsRoutes = require('./Routes/mlbTeamsRoutes'); // Import your MLB teams routes
const cors = require('cors');
require('dotenv').config(); // Load environment variables from a .env file


const app = express();
const PORT = process.env.PORT || 5000;  // Set the port to an environment variable or default to 5000

// Middleware to parse incoming requests with JSON bodies
app.use(express.json());
app.use(cors());


// Use the MLB teams routes for API endpoints
app.use('/api/mlb', mlbTeamsRoutes);

// Start the Express server and listen on the specified port 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

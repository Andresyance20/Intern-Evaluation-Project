# MLB Teams Web Application

## Project Overview
This full-stack web application provides a list of Major League Baseball (MLB) teams, grouped by league (American/National) and division (Central/East/West). The application features a server-side API written in Node.js and a client-side frontend built with React. It allows users to view, sort, and filter the list of MLB teams.

## Features
- Server-side API endpoint to retrieve all MLB teams, grouped by league and division.
- Client-side React application that consumes the server-side API to display the list of MLB teams.
- Sortable and filterable list of MLB teams by league and division.


## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: React, HTML, CSS, JavaScript
- **External API**: Uses `http://brew-roster-svc.us-e2.cloudhub.io/api/teams` to retrieve MLB team information.

## Prerequisites
Before running the application, ensure you have the following installed:
- Node.js (version 14 or later)
- npm (Node Package Manager)

## Setup Instructions
1. **Clone the Repository**
   - Open a terminal or command prompt.
   - Clone the repository to your local machine using:
     ```bash
     git clone https://github.com/your-repo-url.git
     ```

2. **Install Dependencies**
   - Navigate to the backend folder and run:
     ```bash
     npm install
     ```
   - If there's a separate frontend folder, navigate there and install dependencies similarly.

3. **Start the Backend Server**
   - In the backend folder (server-side), run:
     ```bash
     npm start
     ```
     or
    ```bash
     node server.js
     ```

4. **Start the Frontend Application**
   navigate to the frontend folder and run:
     ```bash
     npm start
     ```
    

5. **Access the Application**
   - Open a web browser (like Google Chrome) and go to `http://localhost:3000`.
   - The application should display the list of MLB teams.

## Additional Notes
- If you encounter any issues, check for error messages in the terminal and ensure all dependencies are installed correctly.
- If using a PC with Google Chrome, ensure JavaScript is enabled and security settings do not block the application.

## Troubleshooting
- If the frontend does not load, check that the backend server is running first.

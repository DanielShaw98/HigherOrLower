# Higher or Lower: Populations

## Demo
![higher-or-lower](https://github.com/user-attachments/assets/7e48c73c-7c19-4017-ac73-fc635332226b)

## Overview
The **Higher or Lower Game** is an interactive web application that challenges players to guess which of two countries has a higher population. This project was built to explore working with APIs and integrating a Python backend with a React frontend.

## Project Structure
The project is organized into a single folder named `HigherOrLower`, which contains two subfolders: `backend` and `frontend`.

	HigherOrLower/
	├── backend/
	│   ├── app.py
	│   ├── api.py
	│   ├── game.py
	│   └── requirements.txt
	└── frontend/
	    ├── src/
	    │   ├── components/
	    │   │   ├── TitleCard.jsx
	    │   │   ├── GameScreen.jsx
	    │   │   ├── CountryCards.jsx
	    │   │   └── HowToPlay.jsx
	    │   └── App.jsx
	    └── package.json


### Backend
The `backend` folder contains:
- `app.py`: The main Flask application that handles requests and serves as the API endpoint.
- `api.py`: Contains the logic for making API calls to the [REST Countries API](https://restcountries.com/).
- `game.py`: Implements the game logic methods used in the game.
- `requirements.txt`: Lists the dependencies required to run the backend.

### Frontend
The `frontend` folder is set up using React and Vite and contains:
- `TitleCard.jsx`: Displays the game title and introductory information.
- `GameScreen.jsx`: The main gameplay area where users make their guesses.
- `CountryCards.jsx`: Renders the cards showing the countries and their populations.
- `HowToPlay.jsx`: Provides instructions on how to play the game.
- `App.jsx`: The main application component that handles Axios requests to the backend.

## Installation

Clone the repository:

	git clone https://github.com/yDanielShaw/HigherOrLower.git

### Backend
1. Navigate to the `backend` directory:
   
	   cd HigherOrLower/backend

2. Install the required Python packages:

		pip install -r requirements.txt

3.  Run the Flask backend:

		python app.py

### Frontend

1.  Navigate to the `frontend` directory:

		cd HigherOrLower/frontend

2. Install the required Node.js packages:

		npm install

3. Start the React frontend:

		npm run dev


## How to Play

1.  You will be presented with two countries.
2.  The country on the right will have buttons for higher or lower, click depending on whether you think it has a higher or lower population than the country on the left.
3.  The game will provide feedback on your guess and update the scores accordingly.

## Technologies Used

-   **Backend**: Flask, Python
-   **Frontend**: React, Vite, Axios
-   **API**: REST Countries API

## Acknowledgments

-   [REST Countries API](https://restcountries.com/) for providing country data.
-   Flask and [React](https://reactjs.org/) for the frameworks used in this project.

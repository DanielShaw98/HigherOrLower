import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [newCountry, setNewCountry] = useState(null);
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [guess, setGuess] = useState('');

  // Start the game and get initial two countries
  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    try {
      const response = await axios.post('http://localhost:8000/start-game');
      setCurrentCountry(response.data.current_country);
      setNewCountry(response.data.new_country);
    } catch (error) {
      console.error('Error starting the game', error);
    }
  };

  const handleGuess = async () => {
    try {
      const response = await axios.post('http://localhost:8000/submit-guess', {
        current_country: currentCountry,
        new_country: newCountry,
        guess: guess,
      });

      if (response.data.result === 'wrong') {
        setGameOver(true);
        setResult(response.data.message);
      } else {
        setCurrentCountry(newCountry);
        setNewCountry(response.data.new_country);
        setResult('Correct! Continue...');
      }
    } catch (error) {
      console.error('Error submitting guess', error);
    }
  };

  return (
    <div className="App">
      <h1>Population Higher or Lower Game</h1>
      {gameOver ? (
        <h2>{result}</h2>
      ) : (
        <>
          <div>
            <h2>Current Country: {currentCountry?.name}</h2>
            <h3>Population: {currentCountry?.population}</h3>
          </div>
          <div>
            <h2>New Country: {newCountry?.name}</h2>
          </div>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter 'h' for higher or 'l' for lower"
          />
          <button onClick={handleGuess}>Submit Guess</button>
          <p>{result}</p>
        </>
      )}
    </div>
  );
}

export default App;

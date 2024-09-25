import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleCard from './components/TitleCard/TitleCard';
import GameScreen from './components/GameScreen/GameScreen';

function App() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [newCountry, setNewCountry] = useState(null);
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);

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

  const handleGuess = async (guess) => {
    try {
      const response = await axios.post('http://localhost:8000/submit-guess', {
        current_country: currentCountry,
        new_country: newCountry,
        guess: guess,
      });

      if (response.data.result === 'wrong') {
        setGameOver(true);
        setResult(`Game Over! ${currentCountry.name} has a population of ${currentCountry.population.toLocaleString()}, while ${newCountry.name} has ${newCountry.population.toLocaleString()}.`);
      } else {
        const answer = response.data.answer;
        setCurrentCountry(newCountry);
        setNewCountry(response.data.new_country);
        setResult(`Correct! ${currentCountry.name} has a population of ${currentCountry.population.toLocaleString()} which is ${answer} than ${newCountry.name}.`);
      }
    } catch (error) {
      console.error('Error submitting guess', error);
    }
  };

  return (
    <div className="App">
      <TitleCard />
      <GameScreen
        gameOver={gameOver}
        result={result}
        currentCountry={currentCountry}
        newCountry={newCountry}
        handleGuess={handleGuess}
      />
    </div>
  );
}

export default App;

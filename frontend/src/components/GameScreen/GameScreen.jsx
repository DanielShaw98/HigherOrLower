import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './GameScreen.css';

const GameScreen = ({ gameOver, result, currentCountry, newCountry, handleGuess, currentPopulation, newPopulation }) => {
  return (
    <div className="game-screen">
      <div className="card-container">
        <CountryCard country={currentCountry} currentPopulation={currentPopulation} gameOver={gameOver} />
        <h3>VS</h3>
        <CountryCard country={newCountry} newPopulation={newPopulation} handleGuess={handleGuess} gameOver={gameOver} rightCard />
      </div>
      <p>{result}</p>
    </div>
  )
}

export default GameScreen

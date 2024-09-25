import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './GameScreen.css';

const GameScreen = ({ gameOver, result, currentCountry, newCountry, handleGuess }) => {
  return (
    <div className="game-screen">
      {gameOver ? (
        <h2>{result}</h2>
      ) : (
        <>
          <div className="card-container">
            <CountryCard country={currentCountry} />
            <CountryCard country={newCountry} />
          </div>
          <div className="button-container">
            <button onClick={() => handleGuess('h')}>Higher</button>
            <button onClick={() => handleGuess('l')}>Lower</button>
          </div>
          <p>{result}</p>
        </>
      )}
    </div>
  )
}

export default GameScreen

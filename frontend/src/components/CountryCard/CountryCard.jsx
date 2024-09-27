import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country, currentPopulation, newPopulation, handleGuess, gameOver, rightCard }) => {
  if (!country) {
    return (
    <div>
      <h2>Loading...</h2>
    </div>
    )
  }
  return (

    <div className="country-card">
      <h2>{country?.name}</h2>
      <img src={country.flags} alt={`${country.name} flag`} />
      {currentPopulation && <h4>Population: {currentPopulation.toLocaleString()}</h4>}
      {gameOver && newPopulation && <h4>Population: {newPopulation.toLocaleString()}</h4>}
      {!currentPopulation && !rightCard && <h5></h5>}
      {rightCard && !gameOver && <div className="button-container">
        <button onClick={() => handleGuess('h')} className="higher-button">
          Higher
          <img src="../../../public/arrow-up.svg" alt="white arrow pointing upwards" />
        </button>
        <button onClick={() => handleGuess('l')} className="lower-button">
          Lower
          <img src="../../../public/arrow-down.svg" alt="white arrow pointing downwards" />
        </button>
      </div>}
    </div>
  )
}

export default CountryCard

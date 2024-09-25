import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country, title }) => {
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
    </div>
  )
}

export default CountryCard

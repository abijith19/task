import React, { useState } from 'react';
const CityForm = () => {
  
  const [cities, setCities] = useState([]);
  const [cityInput, setCityInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const trimmedCity = cityInput.trim();
    
    if (!trimmedCity) {
      setError('City name cannot be empty or just whitespace.');
      return;
    }

    if (cities.includes(trimmedCity)) {
      setError('This city is already in the list.');
      return;
    }

    setCities([...cities, trimmedCity]);
    setCityInput('');
    setError(''); 
  };

  return (
    <div>
      <h1>City List</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Add City</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityForm;

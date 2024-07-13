import React, { useState } from 'react';
import CardComponent from '../CardComponent';

const ReadVehicle = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/vehicle/searchVehicle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({vehicleNo:query}),
      });

      const data = await res.json();
      setResults(data);
    } catch (error) {
      setError('Error fetching vehicle records. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='search-box'>
        <form onSubmit={handleSearchSubmit}>
          <input
            type='text'
            className='search-bar'
            value={query}
            onChange={handleSearch}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='main-panel'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          results.map((result, key) => (
            <CardComponent key={key} value={result.name} />
          ))
        )}
      </div>
    </div>
  );
};

export default ReadVehicle;

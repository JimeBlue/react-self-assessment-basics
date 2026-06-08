import { useState, useEffect } from 'react';

const PokemonViewer = ({ id }) => {
  // TODO: Create state for loading, error, and data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // TODO: If prop id is not a number between 1 and 151, render "Invalid Pokémon ID" and DO NOT fetch data
  if (typeof id !== 'number' || id < 1 || id > 151) return <div>Invalid Pokémon ID</div>;
  // TODO: useEffect to fetch Pokémon data from https://pokeapi.co/api/v2/pokemon/{id}
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch Pokémon');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch Pokémon');
        setLoading(false);
      });
  }, [id]);
  // TODO: Show loading indicator initially and while fetching
  if (loading) return <div>Loading...</div>;
  // TODO: Show error message if fetch failed
  if (error) return <div>{error}</div>;
  // TODO: Show Pokémon name and image sprites.front_default when data is fetched successfully
  return (
    <div>
      <p>{data.name}</p>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
};

export default PokemonViewer;

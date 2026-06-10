import { useState, useEffect } from 'react';

const PokemonViewer = ({ id }) => {
  // TODO: Create state for loading, error, and data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // TODO: useEffect to fetch Pokémon data from https://pokeapi.co/api/v2/pokemon/{id}
  useEffect(() => {
    // TODO: If prop id is not a number between 1 and 151, DO NOT fetch data
    if (typeof id !== 'number' || id < 1 || id > 151) return;

    // TODO: Use an AbortController to cancel the fetch if id changes or component unmounts
    const abortController = new AbortController();

    // TODO: Use an async IIFE inside useEffect (useEffect callback cannot be async directly)
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
          signal: abortController.signal,
        });
        if (!res.ok) throw new Error('Failed to fetch Pokémon');
        const json = await res.json();
        setData(json);
      } catch (err) {
        // TODO: Ignore abort errors — they are expected when the effect cleans up
        if (err.name === 'AbortError') return;
        setError('Failed to fetch Pokémon');
      } finally {
        // TODO: Always clear the loading state, whether the fetch succeeded or failed
        setLoading(false);
      }
    })();

    // TODO: Return a cleanup function that aborts the fetch when id changes or component unmounts
    return () => abortController.abort();
  }, [id]);

  // TODO: If prop id is not a number between 1 and 151, render "Invalid Pokémon ID" and DO NOT fetch data
  if (typeof id !== 'number' || id < 1 || id > 151) return <div>Invalid Pokémon ID</div>;
  // TODO: Show loading indicator initially and while fetching
  if (loading || !data) return <div>Loading...</div>;
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

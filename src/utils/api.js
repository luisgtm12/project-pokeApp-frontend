const BASE_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = async (limit = 151) => {
  try {
    const response = await fetch(`${BASE_ENDPOINT}?limit=${limit}`);
    const data = await response.json();
    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokeResponse = await fetch(pokemon.url);
        const pokeData = await pokeResponse.json();
        return {
          name: pokemon.name,
          image: pokeData.sprites.front_default,
        };
      })
    );
    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};

export const searchPokemon = async (name) => {
  try {
    const response = await fetch(`${BASE_ENDPOINT}/${name.toLowerCase()}`);
    const data = await response.json();
    return {
      name: data.name,
      image: data.sprites.front_default,
    };
  } catch (error) {
    console.error('Error searching for Pokémon:', error);
    throw error;
  }
};
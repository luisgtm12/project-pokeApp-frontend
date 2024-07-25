const BASE_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemons = async (limit = 151) => {
  try {
    const response = await fetch(`${BASE_ENDPOINT}?limit=${limit}`);
    const data = await response.json();
    
    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokeResponse = await fetch(pokemon.url);
        const pokeData = await pokeResponse.json();
        return {
          id:pokeData.id,
          name: pokemon.name,
          image: pokeData.sprites.other['official-artwork'].front_default,
          sound: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokeData.id}.ogg`,
        };
      })
    );
    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};

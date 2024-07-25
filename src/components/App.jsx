import React, { useState, useEffect } from 'react';
import Main from './Main';
import Welcome from './Welcome';
import Preloader from './Preloader';
import Footer from './Footer';
import { getAllPokemons} from '../utils/api';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getPokemons = async () => {
      try {
        const pokemonData = await getAllPokemons();
        setPokemons(pokemonData);
        setFilteredPokemons(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    getPokemons();
  }, []);

  const handleSearch = (term) => {
    if (term) {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons(pokemons);
    }
  };

  function handleClear(){
    setFilteredPokemons(pokemons);
  }
  return (
    <div className="page">
      {loading ? <Preloader /> : null}
      <Main onSearch={handleSearch} onClear={handleClear}/>
      <Welcome pokemons={filteredPokemons} />
      <Footer/>
    </div>
  );
}

export default App;
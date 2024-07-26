import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Pokedex from './Pokedex';
import Preloader from './Preloader';
import HomePage from './Homepage';
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
        console.error('Error al obtener datos de Pokémon:', error);
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
    <Router>
    <div className="page">
      <Routes>
        <Route path="/" element={
          <>
            {loading ? <Preloader /> : null}
            <HomePage />
          </>
          }
        />
        <Route
          path="/app"
          element={
            <>
              {loading ? <Preloader /> : null}
              <Main onSearch={handleSearch} onClear={handleClear} />
              <Pokedex pokemons={filteredPokemons} />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
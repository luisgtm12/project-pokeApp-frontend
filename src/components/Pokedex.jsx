import React from 'react';
import fondo from '../images/fondo2.png';
import Pokemon from './Pokemon';

function Pokedex({ pokemons }){
  return(
    <>
      <div className="welcome">
        <img src={fondo} alt="fondo de bievenida" className="welcome_img"/>
        <div className="pokedex">
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index}
            id={pokemon.id} 
            name={pokemon.name} 
            image={pokemon.image} 
            sound={pokemon.sound}/>
        ))}
      </div>
      </div>
    </>
  )
}

export default Pokedex;
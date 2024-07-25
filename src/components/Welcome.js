import React from 'react';
import fondo from '../images/fondo2.png';
import Pokemon from './Pokemon';

function Welcome({ pokemons }){
  return(
    <>
      <div className="welcome">
        <img src={fondo} alt="fondo de bievenida" className="welcome_img"/>
        <div className="pokedex">
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index} id={index} name={pokemon.name} image={pokemon.image} />
        ))}
      </div>
      </div>
    </>
  )
}

export default Welcome;
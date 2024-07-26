import React from 'react';
import { Link } from 'react-router-dom';
function HomePage(){
  return(
    <div className="home-page">
      <div className='home-page__container'>
        <h1 className='home-page__container_title'>Bienvenido a la Pokedex<br/> 1 Gen</h1>
        <p className='home-page__container_span'>Haz clic en el botón de abajo para acceder a la aplicación y ver los Pokémon.</p>
        <Link to="/app">
          <button className="home-page__container_button">Ingresar</button>
        </Link>
      </div>
      
    </div>
  )
}

export default HomePage;
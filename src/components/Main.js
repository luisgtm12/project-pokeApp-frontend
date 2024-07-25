import React from 'react';
import Header from './Header.js';

function Main({ onSearch, onClear }){
  return(
    <>
      <Header onSearch={onSearch} onClear={onClear} />
      
    </>
    
  )
}

export default Main;
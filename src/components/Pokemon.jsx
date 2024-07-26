function Pokemon({ name, image,id,sound }){
  function playSound() {
    const audio = new Audio(sound);
    audio.play();
  };
  return(
    <div  className="pokemon">
      <img className="pokemon_img" src={image} alt={`${name}-${id}`}/>
      <hr></hr>
      <h3>{`${name} #${id}`}</h3>
      <button className="poke-sound" onClick={playSound}>Play</button>
    </div>
  )
}

export default Pokemon;
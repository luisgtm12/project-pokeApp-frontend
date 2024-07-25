function Pokemon({ name, image,id }){
  const i = id++;
  return(
    <div  className="pokemon">
      <h3>{name}</h3>
      <img src={image} alt={`${name}-${i}`} />
    </div>
  )
}

export default Pokemon;
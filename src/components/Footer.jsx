function Footer(){
  return(
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mi App Pokémon. Todos los derechos reservados.</p>
      <div className="footer__links">
        <a href="#about">Acerca de</a>
        <a href="#contact">Contacto</a>
        <a href="#privacy">Política de Privacidad</a>
      </div>
    </footer>
  )
}

export default Footer;
import Header from "./Header";
import fondo from "../images/fondo2.png"

function Welcome(){
  return(
    <>
      <Header/>
      <div className="welcome">
        <img src={fondo} alt="fondo de bievenida" className="welcome_img"/>
      </div>
    </>
  )
}

export default Welcome;
import logo from "../images/klipartz.com.png"
import SearchBar from "./SearchBar.js";

function Header ({ onSearch,onClear }){
  return(
  <header className="header">
    <img src={logo} alt="logo" className="header_img"/>
    <SearchBar onSearch={onSearch} onClear={onClear}/>
  </header>)
}

export default Header;
import { Link } from 'react-router-dom'
import '../../style/Header.css'
import logo from '../../img/LOGO.svg'
function Header() {
  return (
    <header>
      <img src={logo} alt={"logo kasa"}/>
      <nav>
        <Link to="/" className={"accueil"}>Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header

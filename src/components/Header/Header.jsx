import './Header.css'
import Logo from '../logo/Logo'

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul className="Header_Nav">
          <Logo />
          <li><a href="/">Accueil</a></li>
          <li><a href="/profil">Profil</a></li>
          <li><a href="/profil/12">Réglage</a></li>
          <li><a href="/profil/18">Communauté</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

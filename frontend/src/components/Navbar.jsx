import { Link, useLocation } from 'react-router-dom'

// Link è il componente di React Router per navigare tra pagine
// useLocation dice su quale pagina ci si trova in questo momento

function Navbar() {

  // location.pathname è l'url corrente, tipo '/', '/films', '/series'
  const location = useLocation()

  // funzione che controlla se il link è quello della pagina attuale 
  // serve per evidenziare la voce di menu attiva
  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">

      {/* logo/brand — cliccando torna alla homepage */}
      <Link to="/" className="navbar-brand">
        NETFLIXCLONE
      </Link>

      <div className="navbar-links">

        {/* Link di React Router non ricarica la pagina come un <a> normale */}
        {/* aggiunge la classe 'active' solo se siamo su quella pagina */}
        <Link
          to="/"
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>

        <Link
          to="/films"
          className={`nav-link ${isActive('/films') ? 'active' : ''}`}
        >
          Film
        </Link>

        <Link
          to="/series"
          className={`nav-link ${isActive('/series') ? 'active' : ''}`}
        >
          Serie TV
        </Link>

        {/* Coming soon — non è un Link perché non porta da nessuna parte */}
        <span className="nav-link dimmed">Coming soon</span>

      </div>
    </nav>
  )
}

export default Navbar
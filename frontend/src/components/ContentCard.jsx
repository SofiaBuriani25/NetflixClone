import { useNavigate } from 'react-router-dom'

// ContentCard riceve come prop un oggetto 'content' con i dati di un film/serie
// e restituisce il visual della singola locandina
function ContentCard({ content }) {
  const navigate = useNavigate() //Aggiunta per cliccare le locandine

  return (
    <div className="card" onClick={() => navigate(`/contents/${content.id}`)}> {/* aggiunto click per la locandina*/}

      {/* la locandina — poster_url arriva dal database */}
      <img
        src={content.poster_url}
        alt={content.title}
      />

      <div className="card-info">

        {/* titolo del film/serie */}
        <div className="card-title">{content.title}</div>

        <div className="card-meta">
          {/* badge viola per film, verde per serie */}

          {/* condition ? valoreSeVero : valoreSeFalso*/}
          {/* Ci vanno 3 uguali perchè fa confronto rigido, no conversione tra tipi. Ci deve essere ESATTAMENTE 'film'*/}
          {content.type === 'film'
            ? <span className="badge-film">Film</span>
            : <span className="badge-series">Serie</span>
          }

          {/* categoria (Azione, Horror, ecc.) */}
          <span className="card-category">{content.category}</span>
        </div>

      </div>
    </div>
  )
}

export default ContentCard
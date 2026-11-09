import { useState } from 'react'
import ContentCard from './ContentCard'

// ContentRow riceve:
// - title: il titolo della sezione ("Ultime uscite", "Ultimi visti")
// - contents: array di film/serie da mostrare
function ContentRow({ title, contents }) {

  // 'offset' tiene traccia di quante card ho fatto scorrere
  // useState(0) significa che parte da 0, mentre setOffset è la funzione per aggiornarlo
  const [offset, setOffset] = useState(0)

  const VISIBLE = 7                 // card visibili contemporaneamente
  const TOTAL = contents.length     // totale card (max 10 da API)

  // freccia destra: vai avanti se ci sono ancora card nascoste
  const goRight = () => {
    if (offset + VISIBLE < TOTAL) setOffset(offset + 1)
  }

  // freccia sinistra: va indietro se non siamo già all'inizio
  const goLeft = () => {
    if (offset > 0) setOffset(offset - 1)
  }

  // mostra solo le card dalla posizione 'offset' a 'offset + VISIBLE'
  const visible = contents.slice(offset, offset + VISIBLE)

  return (
    <div className="section">

      {/* titolo della sezione */}
      <div className="section-title">{title}</div>

      <div className="row-wrapper">

        {/* freccia sinistra — appare solo se non è all'inizio. &#8249; = simbolo “‹” */}
        {offset > 0 && (
          <button className="arrow arrow-left" onClick={goLeft}>&#8249;</button>
        )}

        {/* riga di card */}
        <div className="cards-row">
          {visible.map(content => (
            // key è obbligatoria in React quando si fa il map di una lista
            // serve a React per capire quale elemento è cambiato perchè associa una key univoca ad ogni elemento
            <ContentCard key={content.id} content={content} />
          ))}
        </div>

        {/* freccia destra — appare solo se ci sono card nascoste. &#8250; = simbolo “>” */}
        {offset + VISIBLE < TOTAL && (
          <button className="arrow arrow-right" onClick={goRight}>&#8250;</button>
        )}

      </div>
    </div>
  )
}

export default ContentRow
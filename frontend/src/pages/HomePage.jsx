import { useState, useEffect } from 'react'
import ContentRow from '../components/ContentRow'
import { getLatest, getWatched } from '../services/api'

function HomePage() {

  // useState per salvare i dati che arrivano dall'API (ne prende 10 da ContentController.php)
  // si parte con array vuoti mentre si aspetta la risposta
  const [latest, setLatest] = useState([])      // array di contenuti latest
  const [watched, setWatched] = useState([])    // array di contenuti watched

  // useState per gestire il caricamento e gli errori
  const [loading, setLoading] = useState(true)  // booleano
  const [error, setError] = useState(null)      // string/null

  // useEffect esegue il codice al suo interno quando il componente
  // viene montato (cioè quando la pagina viene caricata per la prima volta)
  // il [] alla fine significa "esegui solo una volta"
  useEffect(() => {
    const fetchData = async () => {
      try {
        // chiama entrambe le API contemporaneamente (/api/contents/latest) e (/api/contents/watched)
        const [latestData, watchedData] = await Promise.all([
          getLatest(),
          getWatched()
        ])
        // prende tutti i dati ma mostra solo i primi 10 nella homepage
        setLatest(latestData.slice(0,10))
        setWatched(watchedData.slice(0,10))
      } catch (err) {
        // se qualcosa va storto salva il messaggio di errore
        setError('Errore nel caricamento dei contenuti') // qui viene definito cosa appare in {error}
        console.error(err)
      } finally {
        // in ogni caso (successo o errore) smette di caricare
        setLoading(false)
      }
    }

    fetchData()
  }, []) 

  // mentre aspetta l'API mostra un messaggio
  if (loading) return <div className="loading">Caricamento...</div>

  // se c'è un errore lo mostra
  if (error) return <div className="error">{error}</div>

  return (
    <div className="homepage">
      <ContentRow title="Ultime uscite" contents={latest} />
      <ContentRow title="Ultimi visti" contents={watched} />
    </div>
  )
}

export default HomePage
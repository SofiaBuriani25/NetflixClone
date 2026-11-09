import { useState, useEffect } from 'react'
import ContentRow from '../components/ContentRow'
import { getLatest, getLatestFilms, getWatched, getWatchedFilms } from '../services/api'

function FilmsPage() {

    const [latest, setLatest] = useState([])
    const [watched, setWatched] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try { // filtra solo i film — stesso dato di HomePage ma filtrato
                const [latestData, watchedData] = await Promise.all([
                    // getLatestFilms(),
                    // getWatchedFilms()                            //  QUESTE INVECE DI FILTRARE I CONTENUTI DELLA HOMEPAGE LI RICARICANO

                    getLatest(),
                    getWatched()
                ])
                // setLatest(latestData)
                // setWatched(watchedData)                          //  QUESTE INVECE DI FILTRARE I CONTENUTI DELLA HOMEPAGE LI RICARICANO

                setLatest(latestData.filter(c => c.type === 'film'))
                setWatched(watchedData.filter(c => c.type === 'film'))
            } catch (err) {
                setError('Errore nel caricamento dei film')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <div className="loading">Caricamento...</div>
    if (error) return <div className="error">{error}</div>

    return (
        <div className="homepage">
            <ContentRow title="Ultimi film pubblicati" contents={latest} />
            <ContentRow title="Ultimi film visti" contents={watched} />
        </div>
    )
}

export default FilmsPage
import { useState, useEffect } from 'react'
import ContentRow from '../components/ContentRow'
import { getLatest, getLatestSeries, getWatched, getWatchedSeries } from '../services/api'

function SeriesPage() {

    const [latest, setLatest] = useState([])
    const [watched, setWatched] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try { //filtra solo le serie tv - stesso dato di HomePage ma filtrato
                const [latestData, watchedData] = await Promise.all([
                    // getLatestSeries(),
                    // getWatchedSeries()            //  QUESTE INVECE DI FILTRARE I CONTENUTI DELLA HOMEPAGE LI RICARICANO

                    getLatest(),
                    getWatched()
                ])
                // setLatest(latestData)
                // setWatched(watchedData)           //  QUESTE INVECE DI FILTRARE I CONTENUTI DELLA HOMEPAGE LI RICARICANO

                setLatest(latestData.filter(c => c.type === 'series'))
                setWatched(watchedData.filter(c => c.type === 'series'))
            } catch (err) {
                setError('Errore nel caricamento delle serie TV')
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
            <ContentRow title="Ultime serie TV pubblicate" contents={latest} />
            <ContentRow title="Ultime serie TV viste" contents={watched} />
        </div>
    )
}

export default SeriesPage
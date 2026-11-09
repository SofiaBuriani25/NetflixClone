import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getContent } from '../services/api'

// useParams legge i parametri dall'URL (es. l'id in /contents/5)
// useNavigate permette di navigare programmaticamente (es. tornare indietro)

function ContentPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [content, setContent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getContent(id)
                setContent(data)
            } catch (err) {
                setError('Contenuto non trovato')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id]) // si ricarica (cioè riesegue l'effect) se cambia l'id nell'url

    if (loading) return <div className="loading">Caricamento...</div>
    if (error) return <div className="error">{error}</div>

    return (
        <div className="detail-page">

            {/* bottone per tornare indietro. React esegue navigate(-1) */}
            <button className="back-button" onClick={() => navigate(-1)}>
                ← Torna indietro
            </button>

            <div className="detail-container"> {/*Contenitore principale della pagina */}

                {/* locandina */}
                <img
                    className="detail-poster"
                    src={content.poster_url} // usa l’URL immagine ricevuto dal backend
                    alt={content.title}
                />

                <div className="detail-info">

                    <h1 className="detail-title">{content.title}</h1>

                    <div className="detail-badges">
                        {content.type === 'film'
                            ? <span className="badge-film">Film</span> // Se sono film scegli al tegoria film
                            : <span className="badge-series">Serie TV</span> // altrimenti le serie tv
                        }
                        <span className="detail-category">{content.category}</span>
                    </div>

                    <p className="detail-description">{content.description}</p>

                    <div className="detail-meta">
                        {/* mostra durata se film, stagioni/episodi se serie */}
                        {content.type === 'film' ? (
                            <span>⏱ Durata: {content.duration} minuti</span>
                        ) : (
                            <> {/* Serve per raggruppare più elementi senza creare un <div> in più */}
                                <span>📺 Stagioni: {content.seasons}</span>
                                <span>🎬 Episodi: {content.episodes}</span>
                            </>
                        )}

                        <span>📅 Pubblicato il: {new Date(content.published_at).toLocaleDateString('it-IT')}</span>
                        {/* trasforma la stringa in oggetto Date JS e formatta in stile italiano */ }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContentPage
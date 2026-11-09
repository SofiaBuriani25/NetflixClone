import axios from 'axios'

// axios è la libreria che usa React per fare chiamate HTTP
// baseURL dice ad axios di iniziare tutti gli url con /api
// che poi il proxy di Vite gira a Laravel su porta 8000
const api = axios.create({
  baseURL: '/api'
})


// ------------------------ HOMEPAGE (film e serie insieme) ------------------------------------
// funzione che chiama /api/contents/latest
// async/await serve perché la risposta arriva dopo qualche istante (è asincrona)
export const getLatest = async () => {
  const response = await api.get('/contents/latest')
  return response.data  // restituisce solo i dati JSON, non l'intera risposta HTTP
}

// funzione che chiama /api/contents/watched
export const getWatched = async () => {
  const response = await api.get('/contents/watched')
  return response.data
}


// ---------------------------- PAGINA FILM (solo film) ----------------------------------------
// funzione che chiama /api/contents/latest/films
export const getLatestFilms = async () => {
  const response = await api.get('/contents/latest/films')
  return response.data
}

// funzione che chiama /api/contents/watched/films
export const getWatchedFilms = async () => {
  const response = await api.get('/contents/watched/films')
  return response.data
}


// ---------------------------- PAGINA SERIE (solo serie tv) ----------------------------------------
// funzione che chiama /api/contents/latest/series
export const getLatestSeries = async () => {
  const response = await api.get('/contents/latest/series')
  return response.data
}


// funzione che chiama /api/contents/watched/series
export const getWatchedSeries = async () => {
  const response = await api.get('/contents/watched/series')
  return response.data
}


// ------------------------ PAGINA SINGOLO CONTENUTO (film + serie tv) --------------------------------
// prende i dettagli di un singolo contenuto per id
// I backtick permettono di inserire variabili dentro una stringa con ${}
// con le virgolette normali ${} viene trattato come testo normale
export const getContent = async (id) => {
  const response = await api.get(`/contents/${id}`)   // backtick (Alt Gr + ')
  return response.data
}
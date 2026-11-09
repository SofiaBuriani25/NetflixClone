import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import SeriesPage from './pages/SeriesPage'
import ContentPage from './pages/ContentPage'

// BrowserRouter: riguarda tutta l'app e abilita la navigazione
// Routes: contenitore di tutte le rotte
// Route: associa un url a una pagina

function App() {
  return (
    <BrowserRouter>

      {/* Navbar è fuori da Routes perché deve apparire su tutte le pagine */}
      {/* esegui/renderizza il componente Navbar presente nell'import. E' come un tag HTML personalizzato */}
      {/* Tag autochiudente (non ha bisogno di chiusura) perchè non ha contenuto, deve solo apparire in ogni pagina */}
      <Navbar />

      {/* il contenuto cambia in base all'url */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/contents/:id" element={<ContentPage />}  />
      </Routes>

    </BrowserRouter>
  )
}

export default App
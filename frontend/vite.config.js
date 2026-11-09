import { defineConfig } from 'vite'
// importa la funzione defineConfig da Vite — serve per avere
// suggerimenti automatici nell'editor (autocomplete)

import react from '@vitejs/plugin-react'
// importa il plugin React per Vite per gestire i file .jsx di React

export default defineConfig({
  plugins: [react()],           // dice a Vite di usare il plugin React
  server: {                     // configurazione del server di sviluppo
    host: '0.0.0.0',            // rende il server accessibile dall'esterno del container Docker in modo che il browser sul mio pc lo veda
    port: 5173,                 // porta di React
    watch: {
      usePolling: true,         // usePolling: true dice a Vite di controllare attivamente ogni secondo se i file sono cambiati 
    },
    proxy: {
      '/api': {                 // tutte le richieste che iniziano con /api vengono intercettate 
        target: 'http://backend:8000',
        // e girate a Laravel — si usa 'backend' (nome del servizio
        // in docker-compose.yml) invece di 'localhost' perché
        // dentro Docker i container si trovano per nome, non per porta

        changeOrigin: true,
        // dice a Vite di modificare l'header della richiesta
        // per far sembrare che parta da backend:8000
        // (necessario per evitare che Laravel la rifiuti)
      }
    }
  }
})
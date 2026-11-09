# Netflix Clone

Clone di Netflix con **backend API in Laravel**, **frontend in React + Vite** e tutto l'ambiente containerizzato con **Docker**. Il catalogo mostra film e serie TV in righe orizzontali, con pagine dedicate a Home, Film, Serie e al dettaglio di ogni contenuto.

Progetto realizzato a scopo di studio e portfolio.

## Stack

| Parte | Tecnologie |
|---|---|
| Backend | Laravel, PHP 8.4, Composer |
| Frontend | React, Vite, React Router DOM, Axios |
| Database | MySQL 8 |
| Ambiente | Docker, Docker Compose |
| Immagini | [picsum.photos](https://picsum.photos) (poster segnaposto) |

## Struttura del progetto

```
CloneNetflix/
├── backend/             # API Laravel
│   ├── app/Http/Controllers/ContentController.php
│   ├── app/Models/Content.php
│   ├── database/migrations/   # tabella contents
│   ├── database/seeders/ContentSeeder.php
│   ├── routes/api.php
│   └── Dockerfile
├── frontend/            # App React
│   ├── src/pages/       # HomePage, FilmsPage, SeriesPage, ContentPage
│   ├── src/components/  # Navbar, ContentCard, ContentRow
│   ├── src/services/api.js   # istanza Axios con baseURL
│   └── Dockerfile
└── docker-compose.yml   # db + backend + frontend
```


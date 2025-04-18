# 🎬 Aplicación de Películas - SPA (React + Vite)

Este proyecto es un sitio web desarrollado con **React**, **Vite** y **React Router DOM**. Permite a los usuarios explorar películas populares, ver detalles de películas y buscar películas para lo cual se utiliza **The Movie Database API (TMDB)**.

---

## 🌐 Demo en linea

Vea la demostración en vivo del proyecto implementado en Vercel: https://filmatic.vercel.app/

---

## 🚀 Funcionalidades

- Página de inicio con lista de películas populares (https://filmatic.vercel.app/).
- Página de detalle con título, géneros, sinopsis, calificación y fecha de lanzamiento (https://filmatic.vercel.app/details/{id}).
- Página de búsqueda por título, se lista películas que coinciden con la búsqueda (https://filmatic.vercel.app/search/{elect}).
- Navegación fluida usando React Router DOM.

---

## 🛠️ Tecnologías

- React
- Vite
- React Router DOM
- TMDB API

---

## 📁 Estructura del Proyecto

```
   └── 📁Filmatic
      └── 📁public
         └── filmatic.png
         └── logo.svg
         └── poster_filmatic.png
      └── 📁src
         └── App.jsx
         └── 📁components
               └── 📁Header
                  └── Header.css
                  └── Header.jsx
               └── 📁MovieCard
                  └── MovieCard.css
                  └── MovieCard.jsx
         └── index.css
         └── main.jsx
         └── 📁pages
               └── 📁Details
                  └── Details.css
                  └── Details.jsx
               └── 📁Home
                  └── Home.css
                  └── Home.jsx
               └── 📁NotFound
                  └── NotFound.css
                  └── NotFound.jsx
               └── 📁Searcher
                  └── Searcher.jsx
         └── 📁services
               └── movies.js
      └── .env
      └── .env.example
      └── .gitignore
      └── eslint.config.js
      └── index.html
      └── package-lock.json
      └── package.json
      └── README.md
      └── vite.config.js
```

---

## ▶️ Cómo ejecutar

1. Clona el repositorio:

   > ```bash
   > $ git clone https://github.com/thalia-mijas/Filmatic.git
   > $ cd Filmatic
   > ```

2. Instala las dependencias:

   > ```bash
   > $ npm install
   > ```

3. Crea un archivo **`.env`** que contenga las siguientes variables de entorno:

   > ```
   > # The Movie Database API Token (TMDB)
   > VITE_TOKEN="your_api_token"
   > ```

4. Ejecuta el servidor en modo desarrollo:
   > ```bash
   > $ npm run dev
   > ```

---
# ClickFinder (React SPA) 🚀

A modern web application for usability analysis and user statistics tracking. The project has been successfully migrated from a Multi-Page Application (MPA) architecture built with vanilla JS to a modern **React 19 (Single-Page Application)** tech stack featuring dynamic routing, asynchronous data fetching, and optimized rendering.

## 🔗 Live Demo
[View the Live Project](https://i1yaremechko.github.io/click-finder-react/)


## 🌟 Features

*   **Full SPA Routing (`react-router-dom`):** Seamless transitions between the Home page and the Statistics page without page reloads.
*   **Dynamic Pagination:** A smart pagination component that adapts to the current page and hides excess page numbers using ellipses (`...`).
*   **URL State Synchronization (`useSearchParams`):** The current page and rows-per-page values are kept in sync with the browser's address bar. This supports native "Back/Forward" browser navigation and allows users to share direct links to specific statistics pages.
*   **Parallel Data Fetching (`Promise.all`):** Users and their statistics are fetched in parallel, cutting data loading times in half.
*   **Reactive Loader:** An integrated `Linear Progress` indicator that smoothly appears during active API requests.
*   **Dynamic Base URL Environment:** Automatic path resolution for images and routing, ensuring compatibility with any hosting platform (GitHub Pages, Vercel, or localhost).
*   **Interface Validation:** Robust prop typing using the `prop-types` library for a safer, more reliable development workflow.

---

## 🛠️ Tech Stack

*   **Library:** React 19 (StrictMode)
*   **Bundler:** Vite
*   **Routing:** React Router DOM (v6+)
*   **Styling:** Sass / SCSS (utilizing BEM methodology, variables, and mixins)
*   **Validation:** PropTypes
*   **API Gateway:** Asynchronous `fetch` integrated with an external REST API

---

## 📂 Project Structure

```text
src/
├── common/
│   ├── constants/        # Global constants (routes, default query params)
│   └── scss/             # Shared SCSS files (variables, reset, breakpoints)
├── components/
│   └── Layout/           # App shell (Header, Footer, Outlet for page content)
├── features/
│   ├── HomeView.jsx      # Home page component
│   ├── Pagination/       # Smart pagination feature
│   │   ├── utils/        # Pagination helper functions
│   │   └── Pagination.jsx
│   └── StatisticsTable/  # Statistics table feature
│       ├── gateways/     # API service for fetching users and stats
│       ├── utils/        # Helper to merge users with their stats
│       └── StatsView.jsx # Main statistics view (logic + table layout)
├── styles/               # Modular SCSS stylesheets for components
├── App.jsx               # Main routing setup
└── main.jsx              # App entry point (React DOM initialization)
```

## 🚀 Quick Start

1. **Clone the repository**   
  ```bash
  git clone https://github.com/i1yaremechko/click-finder-react.git
  cd click-finder-react
  ```

2. **Install the dependencies**
  ```bash
  npm install
  ```

3. **Run in development mode (Local)**
  ```bash
  npm run dev
  ```

  The application will be available at: http://localhost:5173/click-finder-react/

4. **Build for production**
  ```bash
  npm run build
  ```

  Optimized static files will be generated in the dist/ folder.

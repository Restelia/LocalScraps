# Local Scraps

A marketplace for sharing and selling food scraps locally. Built with React (Vite) on the frontend and Python on the backend.

### Running the Frontend

```bash
1. cd FrontEnd

2. npm install

3. npm run dev
```

## Folder Structure

```
CS422-LocalScraps/
│
├── FrontEnd/                       # React frontend (Vite)
│   ├── public/                     # Static assets (favicon, etc.)
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Header.jsx          # Top bar with title and notification bell
│   │   │   ├── Navbar.jsx          # Shop / Sell / User navigation tabs
│   │   │   └── FoodCard.jsx        # Individual food item widget
│   │   │
│   │   ├── pages/                  # One file per page/route
│   │   │   ├── ShopPage.jsx        # Main shop page with search, sort, and food grid
│   │   │   ├── SellPage.jsx        # Sell page (placeholder)
│   │   │   └── UserPage.jsx        # User profile page (placeholder)
│   │   │
│   │   ├── App.jsx                 # Root component, handles page navigation
│   │   ├── App.css                 # Global styles and CSS variables
│   │   └── main.jsx                # Entry point — mounts App into the DOM
│   │
│   ├── package.json                # Frontend dependencies and scripts
│   └── vite.config.js              # Vite configuration
│
└── backend/                        # Python backend?? (coming soon)
```

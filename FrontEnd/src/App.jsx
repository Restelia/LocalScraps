import { useState } from "react";
import ShopPage from "./Pages/ShopPage";
import SellPage from "./Pages/SellPage";
import UserPage from "./Pages/UserPage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("shop");

  const renderPage = () => {
    switch (activePage) {
      case "shop": return <ShopPage />;
      case "sell": return <SellPage />;
      case "user": return <UserPage />;
      default: return <ShopPage />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}
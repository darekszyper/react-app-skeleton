import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

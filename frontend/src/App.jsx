import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

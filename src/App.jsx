import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/product" element={<Product />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsappButton/>
    </Router>
  );
}

export default App;

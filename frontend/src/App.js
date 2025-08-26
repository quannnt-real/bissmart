import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dich-vu" element={<ServicesPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/gioi-thieu" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-gray-900">Trang Giới thiệu</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
            <Route path="/du-an" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-gray-900">Trang Dự án</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
            <Route path="/tin-tuc" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-gray-900">Trang Tin tức</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
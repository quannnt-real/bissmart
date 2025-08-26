import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gioi-thieu" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-[#223b5f]">Trang Giới thiệu</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
            <Route path="/dich-vu" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-[#223b5f]">Trang Dịch vụ</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
            <Route path="/du-an" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-[#223b5f]">Trang Dự án</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
            <Route path="/tin-tuc" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-[#223b5f]">Trang Tin tức</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
            <Route path="/lien-he" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-[#223b5f]">Trang Liên hệ</h1><p className="text-gray-600 mt-4">Đang phát triển...</p></div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
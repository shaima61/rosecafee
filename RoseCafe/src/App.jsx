import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. استيراد مكونات الـ Router
import './index.css';

// تأكد أنك قمت بإنشاء مكونات الصفحات
import HomePage from './pages/Home';
import Menupage from './pages/Menu'; // (مثال، إذا قمت بإنشاء صفحة "عنا")
import AboutPage from './pages/About'; // (مثال، إذا قمت بإنشاء صفحة "عنا")
import Loginpage from './pages/Login'; // (مثال، إذا قمت بإنشاء صفحة "عنا")


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/menu" element={<Menupage />} />
        <Route path="/about" element={<AboutPage />}    />
        <Route path="/login" element={<Loginpage />} /> 

             
\
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. استيراد مكونات الـ Router
import './index.css';

// تأكد أنك قمت بإنشاء مكونات الصفحات
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* 2. تحديد المسار '/' للصفحة الرئيسية */}
        {/* أضف المزيد من المسارات هنا */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
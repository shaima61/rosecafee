import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. استيراد مكونات الـ Router
import './index.css';

// تأكد أنك قمت بإنشاء مكونات الصفحات
import HomePage from './pages/Home';
import Menupage from './pages/Menu'; // (مثال، إذا قمت بإنشاء صفحة "عنا")
import AboutPage from './pages/About'; // (مثال، إذا قمت بإنشاء صفحة "عنا")


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* 2. تحديد المسار '/' للصفحة الرئيسية */}
        <Route path="/menu" element={<Menupage />} />
                <Route path="/about" element={<AboutPage />} /> {/* 3. تحديد المسار '/about' لصفحة "عنا" */}
 {/* 4. تحديد المسار '/menu' لصفحة "القائمة" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
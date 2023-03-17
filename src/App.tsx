import React from 'react';
import { Routes, Route } from 'react-router';
// import { Link } from 'react-router-dom';
import { AboutPage } from './components/AboutPage';
import { Error404 } from './components/Error404';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';

export const App: React.FC = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </div>
);

export default App;

import React from 'react';
import { Routes, Route } from 'react-router';
import { AboutPage } from './components/AboutPage';
import { Error404 } from './components/Error404';
import { MainPage } from './components/MainPage';

export const App: React.FC = () => (

  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/*" element={<Error404 />} />
  </Routes>
);

export default App;

import React from 'react';
import { Routes, Route } from 'react-router';
import { AboutPage } from './components/AboutPage';
import { Error404 } from './components/Error404';
import { HeaderComp } from './components/Header';
import { MainPage } from './components/MainPage';
import './styles.css';

export const App = () => (
  <div className="wrapper">
    <Routes>
      <Route path="/" element={<HeaderComp />}>
        <Route path="" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </div>
);

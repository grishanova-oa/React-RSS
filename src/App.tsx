import React from 'react';
import { Routes, Route } from 'react-router';
import { AboutPage } from './components/AboutPage';
import { Error404 } from './components/Error404';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { FormPage } from './components/FormPage';
import './styles.css';

export const App = () => (
  <div className="wrapper">
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<MainPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </div>
);

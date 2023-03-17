import React from 'react';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { AboutPage } from './components/AboutPage';
import { Error404 } from './components/Error404';
import { MainPage } from './components/MainPage';

export const App: React.FC = () => (
  <div>
    <header className="container__header">
      <div className="header">
        <div className="header_inner">
          <div className="header_logo" />
          <div className="title">Lovely House</div>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

    </header>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </div>
);

export default App;

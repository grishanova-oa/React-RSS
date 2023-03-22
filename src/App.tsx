import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import { AboutPage } from './components/AboutPage';
import { Error404 } from './components/Error404';
import { HeaderComp } from './components/Header';
import { MainPage } from './components/MainPage';
import { FormPage } from './FormPage';
import './styles.css';

export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HeaderComp />}>
            <Route path="" element={<MainPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

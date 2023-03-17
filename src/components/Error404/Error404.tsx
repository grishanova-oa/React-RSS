import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './Error404Styles.css';

export const Error404 = () => (
  <div>
    <Header />
    <p className="error">Error 404</p>
    <Footer />
  </div>
);

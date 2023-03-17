import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';

export const Header = () => (
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
);

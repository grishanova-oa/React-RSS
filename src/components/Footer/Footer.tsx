import React from 'react';
import { Link } from 'react-router-dom';
import './FooterStyles.css';

export const Footer = () => (
  <div className="footer">
    <Link to="/about" className="footer__img" />
  </div>
);

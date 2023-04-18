import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../Footer';
import './HeaderStyles.css';

export const getCurrentPage = (pathname: string) => {
  let res = '';

  switch (pathname) {
    case '/':
      res = 'Main';
      break;
    case '/about':
      res = 'About Us';
      break;
    case '/form':
      res = 'Form';
      break;

    default:
      res = '404 Page';
      break;
  }

  return res;
};

export const Header = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(getCurrentPage(location.pathname));

  return (
    <>
      <header className="container__header">
        <div className="header">
          <div className="header_inner">
            <NavLink to="/" className="header_logo" />
            {/* <div className="title">Lovely Movie</div> */}
            <h1>{currentPage}</h1>
            <div className="header__nav">
              <NavLink to="/" onClick={() => setCurrentPage('Main')} aria-label="cost-input">
                main
              </NavLink>
              <NavLink to="/form" onClick={() => setCurrentPage('Form')}>
                Form
              </NavLink>
              <NavLink to="/about" onClick={() => setCurrentPage('About')}>
                About us
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

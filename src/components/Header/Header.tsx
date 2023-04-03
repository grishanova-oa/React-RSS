import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import './HeaderStyles.css';
import { withRouter } from './WithRouter';

interface IHeaderState {
  currentPage: string;
}
type HeaderProps = {
  location: Location;
};

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

export class Header extends Component<HeaderProps, IHeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    const { location } = this.props;

    this.state = {
      currentPage: getCurrentPage(location.pathname),
    };
  }

  handleNavClick = (currentPage: string) => {
    this.setState({ currentPage });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <>
        <header className="container__header">
          <div className="header">
            <div className="header_inner">
              <NavLink to="/" className="header_logo" />
              <div className="title">Lovely House</div>
              <h1>{currentPage}</h1>
              <NavLink to="/" onClick={() => this.handleNavClick('Main')} aria-label="cost-input">
                Main
              </NavLink>
              <NavLink to="/form" onClick={() => this.handleNavClick('Form')}>
                Form
              </NavLink>
              <NavLink to="/about" onClick={() => this.handleNavClick('About')}>
                About us
              </NavLink>
            </div>
          </div>
        </header>
        <Outlet />
        <Footer />
      </>
    );
  }
}

export const HeaderComp = withRouter(Header);

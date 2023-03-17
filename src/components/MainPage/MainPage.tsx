/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Cards } from '../Cards';
import './MainPageStyles.css';
import { Announcement } from '../../announcement';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainSearchBar } from '../MainSearchBar';

export class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <MainSearchBar />
        <div className="cards">
          {Announcement.map((item) => (
            <Cards
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

import React from 'react';
import { Cards } from '../Cards';
import { MainSearchBar } from '../MainSearchBar';
import './MainPageStyles.css';
import { Announcement } from '../../announcement';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const MainPage = () => (
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

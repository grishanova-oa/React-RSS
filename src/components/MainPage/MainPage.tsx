import React from 'react';
import { Cards } from '../Cards';
import './MainPageStyles.css';
import { announcement } from '../../announcement';
import { MainSearchBar } from '../MainSearchBar';

export const MainPage = () => (
  <div className="main">
    <MainSearchBar />
    <div className="cards">
      {announcement.map((item) => (
        <Cards
          key={item.id}
          item={item}
        />
      ))}
    </div>
  </div>
);

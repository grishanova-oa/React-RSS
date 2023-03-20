import React, { Component } from 'react';
import { Cards } from '../Cards';
import './MainPageStyles.css';
import { announcement } from '../../announcement';
import { MainSearchBar } from '../MainSearchBar';

export class MainPage extends Component {
  render() {
    return (
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
  }
}

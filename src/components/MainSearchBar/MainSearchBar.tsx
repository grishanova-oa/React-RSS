import React from 'react';
import './MainSearchBarStyles.css';

export const MainSearchBar = () => (
  <div className="search-bar">
    <input className="search" type="search" placeholder="..." name="" id="" />
    <button type="button" aria-label="label" className="search__btn">Search</button>
  </div>
);

import React, { useState } from 'react';
import './MainPageStyles.css';
import { MainSearchBar } from '../MainSearchBar';
import { Cards } from '../Cards';
import { IListFilm } from '../types';

export const MainPage = () => {
  const [listFilm, setListFilm] = useState<IListFilm[]>([]);

  return (
    <div className="main">
      <MainSearchBar setListFilm={setListFilm} />
      <div className="cards">
        {listFilm.map((item) => (
          <Cards
            key={item.id}
            item={item}
          />
        ))}
        {listFilm.length === 0 && <div>Nothing to show</div>}
      </div>
    </div>
  );
};

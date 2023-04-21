import React from 'react';
import './MainPageStyles.css';
import { useSelector } from 'react-redux';
import { MainSearchBar } from '../MainSearchBar';
import { Cards } from '../Cards';
import { getListFilms } from '../../store/selector/commonSelectors';

export const MainPage = () => {
  const listFilm = useSelector(getListFilms);
  return (
    <div className="main">
      <MainSearchBar />
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

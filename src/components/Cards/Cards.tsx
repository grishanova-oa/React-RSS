import React from 'react';
import './CardsStyles.css';
import { IListFilm } from '../types';

interface ICards {
  item: IListFilm;
}

export const Cards = ({ item } : ICards) => {
  const posterPath = item.poster_path;
  const noPath = 'https://w0.peakpx.com/wallpaper/354/573/HD-wallpaper-no-love-here-heart-no-love-sayings-sign-white-heart.jpg';
  let actualPath: string;

  if (posterPath) {
    actualPath = `https://image.tmdb.org/t/p/w300/${posterPath}`;
  } else {
    actualPath = noPath;
  }
  return (
    <div className="card">
      <img src={actualPath} className="card__img" alt="" />
      <div className="city">{item.original_title}</div>
      <div className="description">
        <div className="card__title">
          <p className="added">{item.release_date.substring(0, 4)}</p>
          <div className="card__rating">
            <div className="card__star" />
            <p className="rating">{item.vote_average}</p>
          </div>
        </div>
        <div className="card__cost">
          <div className="cost">{item.overview}</div>
        </div>
      </div>
    </div>
  );
};

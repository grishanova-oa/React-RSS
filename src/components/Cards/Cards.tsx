import React, { useState } from 'react';
import './CardsStyles.css';
import { IListFilm } from '../types';
import { CardDetailed } from '../CardDetailed';

interface ICards {
  item: IListFilm;
}

export const Cards = ({ item } : ICards) => {
  const [isShowInfo, setIsShowInfo] = useState(false);

  const posterPath = item.poster_path;
  const noPath = 'https://w0.peakpx.com/wallpaper/889/173/HD-wallpaper-duo-pareja-amor-love-thumbnail.jpg';
  let actualPath: string;

  if (posterPath) {
    actualPath = `https://image.tmdb.org/t/p/w300/${posterPath}`;
  } else {
    actualPath = noPath;
  }
  return (
    <>
      <button className="card" type="button" onClick={() => setIsShowInfo(true)}>
        <img src={actualPath} className="card__img" alt="" />
        <div className="card__title">{item.original_title}</div>
        <div className="description">
          <div className="card__title">
            <p className="added">{item.release_date.substring(0, 4)}</p>
          </div>
        </div>
      </button>
      {isShowInfo && (
        <CardDetailed
          setIsShowInfo={setIsShowInfo}
          item={item}
          actualPath={actualPath}
        />
      )}
    </>

  );
};

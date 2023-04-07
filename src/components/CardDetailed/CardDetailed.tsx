import React from 'react';
import './CardDetailedStyles.css';
import { IListFilm } from '../types';

interface IDetailed {
  setIsShowInfo: (isOpen: boolean) => void;
  item: IListFilm;
  actualPath: string;

}

export const CardDetailed = ({ setIsShowInfo, item, actualPath }: IDetailed) => (
  <div className="modal">
    <button className="modal__btn" type="button" aria-label="modal" onClick={() => setIsShowInfo(false)} />
    <div className="modal__info">
      <img src={actualPath} className="modal__img" alt="" />
      <div className="modal__text">
        <p>{item.original_title}</p>
        <div className="modal__title">
          <p className="added">{item.release_date.substring(0, 4)}</p>
          <div className="card__rating">
            <div className="card__star" />
            <p className="rating">{item.vote_average}</p>
          </div>
          <div className="cost">{item.overview}</div>
        </div>
      </div>
    </div>
  </div>
);

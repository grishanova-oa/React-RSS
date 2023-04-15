import React from 'react';
import './CardDetailedStyles.css';
import { IListFilm } from '../types';

interface IDetailed {
  setIsShowInfo: (isOpen: boolean) => void;
  item: IListFilm;
  actualPath: string;

}

export const CardDetailed = ({ setIsShowInfo, item, actualPath }: IDetailed) => (

  <button className="modal" type="button" onClick={() => setIsShowInfo(false)}>
    <button type="button" className="modal__inner" onClick={(e) => e.stopPropagation()}>
      <div className="modal__back__btn">
        <button className="modal__btn" type="button" aria-label="modal" onClick={() => setIsShowInfo(false)} />
      </div>
      <div className="modal__info">
        <img src={actualPath} className="modal__img" alt="" />
        <div className="modal__text">
          <p className="modal__title">
            {item.original_title}
          </p>
          <div className="info__film">
            <div className="card__rating">
              <div className="card__star" />
              <p className="rating">{item.vote_average}</p>
            </div>
            <p className="modal__year">
              <span>Year:</span>
              {' '}
              {item.release_date.substring(0, 4)}
            </p>
            <p className="modal__year">
              <span>Language:</span>
              {' '}
              {item.original_language.toUpperCase()}
            </p>
            <div className="modal__overview">
              <span>Overview:</span>
              {' '}
              {item.overview}
            </div>
          </div>
        </div>
      </div>
    </button>
  </button>
);

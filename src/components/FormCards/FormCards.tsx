import React from 'react';
import { IFormCard } from '../types';
import './FormCardsStyles.css';

interface ICard {
  card: IFormCard;
}

export const FormCards = ({ card }: ICard) => (
  <div className="form__card">
    <p>New Card</p>
    <img src={card.inputImage} className="form-card__img" alt="" />
    <div className="form-cards__description">
      <div className="form__city">{card.inputTitle}</div>
      <p className="housing">{card.inputSelect?.toUpperCase()}</p>
      <p className="added">{card.date}</p>
      <p className="cost">
        {card.inputCost}
        {card.current}
      </p>
      <p className="form__description">{card.inputDescription}</p>
    </div>
  </div>
);

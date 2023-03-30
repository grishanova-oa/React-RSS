import React from 'react';
import { IFormCard } from '../types';
import './FormCardsStyles.css';

interface ICard {
  card: IFormCard;
}
export const FormCards = ({ card }: ICard) => (
  <div className="form__card">
    <p>New Card</p>
    <img src={card.file} className="form-card__img" alt="" />
    <div className="form-cards__description">
      <div className="form__city">{card.title}</div>
      <p className="housing">{card.select?.toUpperCase()}</p>
      <p className="added">{card.date}</p>
      <p className="cost">
        {card.cost}
        {card.currency}
      </p>
      <p className="form__description">{card.description}</p>
    </div>
  </div>
);

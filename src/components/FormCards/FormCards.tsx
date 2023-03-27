import React, { Component } from 'react';
import { IFormCard } from '../types';
import './FormCardsStyles.css';

interface ICard {
  card: IFormCard;
}
export class FormCards extends Component<ICard> {
  render() {
    const { card } = this.props;
    return (
      <div className="form__card">
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
  }
}

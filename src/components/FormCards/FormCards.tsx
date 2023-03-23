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
      <div className="card">
        {/* <img src={card.img} className="card__img" alt="" /> */}
        <div className="description">
          <div className="card__title">
            <div className="city">{card.title}</div>
          </div>
          {/* <p className="housing">{card.housing}</p> */}
          <p className="added">{card.date}</p>
          <p className="cost">
            {card.cost}
            $
          </p>
        </div>
      </div>
    );
  }
}

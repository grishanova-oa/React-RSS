import React, { Component } from 'react';
import './CardsStyles.css';

interface IAnnouncement {
  id: number;
  housing: string;
  img: string;
  cost: number;
  city: string;
  added: string;
  rating: string;
}
interface ICards {
  item: IAnnouncement;
}
export class Cards extends Component<ICards> {
  constructor(props: ICards) {
    super(props);
  }
  
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <img src={item.img} className="card__img" alt="" />
        <div className="description">
          <div className="card__title">
            <div className="city">{item.city}</div>
            <div className="card__rating">
              <div className="card__star" />
              <p className="rating">{item.rating}</p>
            </div>
          </div>
          <p className="housing">{item.housing}</p>
          <p className="added">{item.added}</p>
          <div className="card__cost">
            <p className="cost">
              {item.cost}
              $
            </p>
            <button type="button" aria-label="label" className="card__message" />
          </div>
        </div>
      </div>
    );
  }
}

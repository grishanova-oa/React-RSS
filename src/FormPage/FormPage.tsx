import React, { Component } from 'react';
import { FormCards } from '../components/FormCards';
import { FormInner } from '../components/FormInner';
import { IFormCard } from '../components/types';
import './FormPageStyles.css';

interface IState {
  cards: IFormCard[];
}
export class FormPage extends Component<{}, IState > {
  constructor(props: IState) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addNewCard = (card: IFormCard) => {
    this.setState(({ cards }: IState) => ({ cards: [...cards, card] }));
  };

  render() {
    const { cards } = this.state;

    return (
      <div className="form__container">
        <h2>Form</h2>
        <FormInner addNewCard={this.addNewCard} />
        {cards.map((card) => (
          <FormCards
            key={card.title}
            card={card}
          />
        ))}
      </div>
    );
  }
}

import React, { useState } from 'react';
import { FormCards } from '../components/FormCards';
import { IFormCard } from '../components/types';
import './FormPageStyles.css';
import { FormInner } from '../components/FormInner';

export const FormPage = () => {
  const [cards, setCards] = useState<IFormCard[]>([]);

  const addNewCard = (card: IFormCard) => {
    setCards([...cards, card]);
  };

  return (
    <div className="form__container">
      <h2>Add new CARD</h2>
      <FormInner addNewCard={addNewCard} />
      <div className="form__cards">
        {cards.map((card) => (
          <FormCards
            key={card.inputTitle}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};

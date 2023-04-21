import React from 'react';
import { useSelector } from 'react-redux';
import { FormCards } from '../FormCards';
import { IFormCard } from '../types';
import './FormPageStyles.css';
import { FormInner } from '../FormInner';
import { getCards } from '../../store/selector/commonSelectors';

export const FormPage = () => {
  const cards = useSelector(getCards);

  return (
    <div className="form__container">
      <h2>Add new CARD</h2>
      <FormInner />
      <div className="form__cards">
        {cards.map((card: IFormCard) => (
          <FormCards
            key={card.inputTitle}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};

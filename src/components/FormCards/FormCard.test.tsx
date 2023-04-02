import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormCards } from '.';
import { IFormCard } from '../types';

const card: IFormCard = {
  inputTitle: 'titleMock',
  inputCost: 'constMock',
  date: 'Mock',
  inputImage: 'Mock',
  current: 'Mock',
  inputSelect: 'Mock',
  inputDescription: 'Mock',
  inputCheckbox: true,
};

test('form', () => {
  const element = render(<FormCards card={card} />);
  const title = element.getByText(/New Card/i);

  expect(title).toBeInTheDocument();
});

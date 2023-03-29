import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormCards } from './FormCards';

const card = {
  title: 'titleMock',
  cost: 'constMock',
  date: 'Mock',
  file: 'Mock',
  currency: 'Mock',
  select: 'Mock',
  description: 'Mock',
  agree: true,
  saved: 'Mock',
  test: 'Mock',
};

test('form', () => {
  const element = render(<FormCards card={card} />);
  const title = element.getByText(/New Card/i);

  expect(title).toBeInTheDocument();
});

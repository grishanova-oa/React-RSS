import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Error404 } from './Error404';

test('checks text from the AboutPage', () => {
  const element = render(<Error404 />);
  const errorPage = element.getByText(/Error 404/i);

  expect(errorPage).toBeInTheDocument();
});

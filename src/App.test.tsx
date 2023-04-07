import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

test('checks text from the header', () => {
  const element = render(<BrowserRouter><App /></BrowserRouter>);
  const lovelyHouse = element.getByText(/Search/i);

  expect(lovelyHouse).toBeInTheDocument();
});

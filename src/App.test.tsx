import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

test('renders learn react link', () => {
  const element = render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = element.getByText(/Lovely House/i);
  expect(linkElement).toBeInTheDocument();
});

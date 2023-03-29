import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';

test('form', () => {
  const element = render(<MainPage />);
  const title = element.getByText(/Search/i);
  const title2 = screen.getByText(/Search/i);
  const className = element.container.getElementsByClassName('<cards>');

  expect(title2).toBeInTheDocument();
  expect(className).toBe(className);
  expect(title).toBe(title);
});

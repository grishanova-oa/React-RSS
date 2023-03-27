import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';

test('form', () => {
  const element = render(<MainPage />);
  const title = element.getByText(/Search/i);

  expect(title).toBeInTheDocument();
});

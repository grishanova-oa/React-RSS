import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormPage } from './FormPage';

test('form', () => {
  const element = render(<FormPage />);
  const title = element.getByText(/Add new CARD/i);

  expect(title).toBeInTheDocument();
});

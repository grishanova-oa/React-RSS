import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { FormPage } from './FormPage';
import { store } from '../..';

const layout = (
  <Provider store={store}>
    <FormPage />
  </Provider>
);

test('form', () => {
  const element = render(layout);
  const title = element.getByText(/Add new CARD/i);

  expect(title).toBeInTheDocument();
});
test('form 2', () => {
  const element = render(layout);
  const title = element.getByText(/Enter the City:/i);

  expect(title).toBeInTheDocument();
});

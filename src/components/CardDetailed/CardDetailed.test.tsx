import React from 'react';
import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../..';
import { CardDetailed } from './CardDetailed';
import { announcement } from '../../announcement';

const path = 'path';

const layout = (
  <Provider store={store}>
    <CardDetailed actualPath={path} item={announcement[0]} setIsShowInfo={() => jest.fn()} />
  </Provider>
);

test('renders from property44444444', async () => {
  const { getByText, getByTestId, getByRole } = render(layout);
  const languageLabel = getByText(/Language:/i);
  const overviewLabel = getByText(/Overview:/i);
  const img = getByRole('img') as HTMLImageElement;
  const modal = getByTestId('modal');
  await waitFor(() => {
    fireEvent.click(modal);
  });
  expect(modal).toBeInTheDocument();

  expect(languageLabel).toBeInTheDocument();
  expect(overviewLabel).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(img.src).toEqual(`http://localhost/${path}`);
});

import React from 'react';
import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../..';
import { CardBtnClose } from './CardBtnClose';

const layout = (
  <Provider store={store}>
    <CardBtnClose setIsShowInfo={() => jest.fn()} />
  </Provider>
);

test('display CardBtn', async () => {
  const { getByRole } = render(layout);
  const button = getByRole('button');
  await waitFor(() => {
    fireEvent.click(button);
  });
  expect(button).toBeInTheDocument();
});

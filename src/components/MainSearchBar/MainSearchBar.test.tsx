import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MainSearchBar } from './MainSearchBar';
import { store } from '../..';

test('checks text from the MainSearchBar', () => {
  const element = render((
    <Provider store={store}>
      <React.StrictMode>
        <MainSearchBar />
      </React.StrictMode>
    </Provider>
  ));
  const searchText = element.getByText(/Search/i);

  expect(searchText).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainSearchBar } from './MainSearchBar';

test('checks text from the MainSearchBar', () => {
  const element = render(<MainSearchBar setListFilm={jest.fn} />);
  const searchText = element.getByText(/Search/i);

  expect(searchText).toBeInTheDocument();
});

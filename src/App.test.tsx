import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { App } from './App';
import { announcement } from './announcement';
import { store } from '.';

const testValue = 'testValue';
const layout = (
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
);

const server = setupServer(
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => res(
    ctx.json({ data: announcement }),
  )),
);
beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

test('checks text from the header', () => {
  const element = render(layout);
  const search = element.getByText(/Search/i);

  expect(search).toBeInTheDocument();
});

test('should check elements on the page after loading', async () => {
  const { getByLabelText, getByText } = render(layout);

  await waitFor(async () => {
    const searchInput = await getByLabelText('searchInput');
    const sendButton = await getByLabelText('sendButton');
    userEvent.type(searchInput, testValue);

    sendButton.click();
  });

  const loaderText = getByText('Loading...');
  expect(loaderText).toBeInTheDocument();
});

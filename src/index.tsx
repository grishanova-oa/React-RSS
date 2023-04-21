import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles.css';
import { render } from '@testing-library/react';
import { App } from './App';
import { commonReducer } from './store/slice/CommonSlice';

export const store = configureStore({
  reducer: {
    commonReducer,
  },
});

const root = document.getElementById('root');
if (root) {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
}

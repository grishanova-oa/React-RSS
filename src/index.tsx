import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { App } from './App';
import { commonReducer } from './store/slice/CommonSlice';

export const store = configureStore({
  reducer: {
    commonReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

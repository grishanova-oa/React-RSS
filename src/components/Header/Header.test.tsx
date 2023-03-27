import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { getCurrentPage, Header } from './Header';

const location = {} as Location;

describe('Texts in document', () => {
  it('it checks About us text', () => {
    const element = render(<BrowserRouter><Header location={location} /></BrowserRouter>);
    const title = element.getByText(/About us/i);

    expect(title).toBeInTheDocument();
  });
  it('it checks Main test', () => {
    const element = render(<BrowserRouter><Header location={location} /></BrowserRouter>);
    const title = element.getByText(/Main/i);

    expect(title).toBeInTheDocument();
  });
});

describe('getCurrentPage', () => {
  it('return Mail', () => {
    const answer = getCurrentPage('/');

    expect(answer).toEqual('Main');
  });
  it('return About Us', () => {
    const answer = getCurrentPage('/about');

    expect(answer).toEqual('About Us');
  });
  it('return form', () => {
    const answer = getCurrentPage('/form');

    expect(answer).toEqual('Form');
  });
  it('return default value', () => {
    const answer = getCurrentPage('/notExist');

    expect(answer).toEqual('404 Page');
  });
});

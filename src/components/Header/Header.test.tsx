import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { getCurrentPage, Header } from './Header';

describe('Texts in document', () => {
  it('it checks About us text', () => {
    const element = render(<BrowserRouter><Header /></BrowserRouter>);
    const title = element.getByText(/About us/i);

    expect(title).toBeInTheDocument();
  });

  it('display the link', () => {
    const links = ['Main', 'About us'];

    const element = render(<BrowserRouter><Header /></BrowserRouter>);

    links.forEach((link) => {
      const navLink = element.getByText(link);
      expect(navLink).toBeInTheDocument();
    });
  });

  it('it checks Main test', () => {
    const element = render(<BrowserRouter><Header /></BrowserRouter>);
    const elemList = element.getAllByText(/Main/i);

    expect(elemList.length).toEqual(2);
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

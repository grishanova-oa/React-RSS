import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormInner } from './FormInner';
import { checkTitleValid, isCostValid, isDescriptionValid } from './helpers';

test('renders from property44444444', () => {
  const element = render(<FormInner addNewCard={() => jest.fn()} />);
  const typeLabel = element.getByText(/Choose type:/i);
  const cityLabel = element.getByText(/Enter the city:/i);
  const dateLabel = element.getByText(/I agree to the processing of personal data/i);
  expect(dateLabel).toBeInTheDocument();
  expect(typeLabel).toBeInTheDocument();
  expect(cityLabel).toBeInTheDocument();
});

test('checks text from the AboutPage', () => {
  const element = render(<FormInner addNewCard={() => jest.fn()} />);
  const input = element.getByLabelText(/Enter the cost:/i);
  expect(input).toHaveAttribute('type', 'number');
});

test('checks button from the AboutPage 1111', () => {
  const element = render(<FormInner addNewCard={() => jest.fn()} />);
  const input = element.getByRole('button');
  expect(input).toHaveAttribute('type', 'submit');
});

test('renders from property 111 ', () => {
  const element = render(<FormInner addNewCard={() => jest.fn()} />);
  const placeHolder = element.getByPlaceholderText(/We are wait you.../i);
  expect(placeHolder).toBeInTheDocument();
});

describe('helpers checking', () => {
  it('checks correct value checkTitleValid', () => {
    expect(checkTitleValid('SomeTitle')).toBeTruthy();
  });
  it('checks short value checkTitleValid', () => {
    expect(checkTitleValid('So')).toEqual(false);
  });
  it('checks first latter value checkTitleValid', () => {
    expect(checkTitleValid('someTitle')).toEqual(false);
  });

  it('checks first latter value isCostValid', () => {
    expect(isCostValid('3')).toBeTruthy();
  });

  it('checks isDescriptionValid value', () => {
    expect(isDescriptionValid('Some test')).toBeTruthy();
  });
});

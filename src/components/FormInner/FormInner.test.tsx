import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormInner } from './FormInner';

test('renders from property', () => {
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

test('checks button from the AboutPage', () => {
  const element = render(<FormInner addNewCard={() => jest.fn()} />);
  const input = element.getByRole('button');
  expect(input).toHaveAttribute('type', 'submit');
});

test('renders from property', () => {
  const element = render(<FormInner addNewCard={() => jest.fn()} />);
  const inputId = element.getByLabelText(/Describe the offer:/i);
  expect(inputId).toHaveAttribute('name', 'text');
});
test('renders from property', () => {
  const element = render(<FormInner addNewCard={() => jest.fn()} />);
  const placeHolder = element.getByPlaceholderText(/We are wait you.../i);
  expect(placeHolder).toBeInTheDocument();
});

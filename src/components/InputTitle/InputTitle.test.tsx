import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputTitle } from './InputTitle';

const inputTitleRef = {} as React.RefObject<HTMLInputElement>;

describe('InputTitle', () => {
  it('should check input text in element', () => {
    const element = render(<InputTitle title="SomeTitle" inputTitleRef={inputTitleRef} />);
    const title = element.getByText('Enter the City:');

    expect(title).toBeDefined();
  });
  it('should check title value in element', () => {
    const element = render(<InputTitle title="SomeTitle" inputTitleRef={inputTitleRef} />);
    const title = element.getByText('SomeTitle');

    expect(title).toBeDefined();
  });
});

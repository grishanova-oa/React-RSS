import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cards } from './Cards';
import { announcement } from '../../announcement';

test('Card', () => {
  const element = render(<Cards item={announcement[0]} />);
  const title = element.getByText('House');

  expect(title).toBeDefined();
});

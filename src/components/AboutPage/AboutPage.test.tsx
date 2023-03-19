import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AboutPage } from './AboutPage';

test('checks text from the AboutPage', () => {
  const element = render(<AboutPage />);
  const aboutPage = element.getByText(/AboutPage/i);

  expect(aboutPage).toBeInTheDocument();
});
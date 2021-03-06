import ReactDOM from 'react-dom';
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  //this test is checking if there is a string learn react
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  //put App component inside the div
  ReactDOM.render(<App />,div);
});

import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/components/App.jsx';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

expect.extend({toBeInTheDocument});

test('renders footer', () => {
  const { getByText } = render(<Provider store={store}>
		<HashRouter><App/></HashRouter>
	</Provider>);
  const author = getByText(/natalia millán sahún/i);
  expect(author).toBeInTheDocument();
});
import React from 'react';
import  { render } from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store';

render(
	<Provider store={store}>
		<HashRouter><App/></HashRouter>
	</Provider>
	, document.getElementById('app')
);
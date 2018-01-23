/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import MovieListApp from './components/MovieListApp';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

// let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
	  <MovieListApp />
	</Provider>,
  document.getElementById('root')
);

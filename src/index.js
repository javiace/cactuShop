import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(cartReducer, composeEnhancers(applyMiddleware()))

ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>
    ,
    document.getElementById('root')
  );

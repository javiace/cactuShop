import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';


ReactDOM.render(
    <React.StrictMode>
      <Provider store={createStore(cartReducer)}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
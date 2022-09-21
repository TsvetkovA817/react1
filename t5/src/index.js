import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStoreHook } from 'react-redux';

import { Provider } from 'react-redux'
import { createStore } from 'redux'


const root = ReactDOM.createRoot(document.getElementById('root'));

const varInIndex = 3;

const initialState = {
  count: 3
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        count: state.count + 1
      }
    case 'minus':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
};

const store1 = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  <Provider store={store1}>
    <BrowserRouter>
      <React.StrictMode>
        <App varInIndex={varInIndex} />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

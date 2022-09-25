import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store1 } from './redux/configureStore';
import { store2 } from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const varInIndex = 3;


root.render(
  <Provider store={store2}>
    <BrowserRouter>
      <React.StrictMode>
        <App varInIndex={varInIndex} />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

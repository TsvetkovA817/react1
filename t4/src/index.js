import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const varInIndex = 3;

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App varInIndex={varInIndex} />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();

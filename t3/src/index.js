import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

const varInIndex = 3;

root.render(
  <React.StrictMode>
    <App varInIndex={varInIndex} />
  </React.StrictMode>
);

reportWebVitals();

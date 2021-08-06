import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardsData from './data/CardsData';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App items={CardsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

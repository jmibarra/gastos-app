import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Navigate} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/gastos-app" >
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
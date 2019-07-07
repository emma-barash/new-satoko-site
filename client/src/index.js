import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import SatokoProvider from './context/SatokoProvider.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <SatokoProvider>
          <App />
        </SatokoProvider>
    </BrowserRouter>,
    document.getElementById('root')
);


import './assets/css/tailwind.output.css';
import './assets/img/registration.svg';
import './assets/css/global.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import Main from './main.js';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './services/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Main />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

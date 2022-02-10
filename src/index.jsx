import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import ThemeContextProvider from "./components/Context/ThemeContext";

ReactDOM.render(
  <>
    <ThemeContextProvider>
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </>,
  document.getElementById("root")
);

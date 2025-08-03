import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/appContext';
import ContentContextProvider from './context/contentContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ContentContextProvider>
          <App />
        </ContentContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

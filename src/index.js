import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/appContext';
import ContentContextProvider from './context/contentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <ContentContextProvider>
        <App />
      </ContentContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);

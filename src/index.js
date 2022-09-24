/* eslint-disable import/no-named-as-default */
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import store from './redux/configureStore';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <Provider store={store}>
        <App />
      </Provider>
    </Routes>
  </React.StrictMode>,
);

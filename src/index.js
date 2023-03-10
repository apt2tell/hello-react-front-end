import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import messagesReducer from './redux/messagesSlice';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    message: messagesReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

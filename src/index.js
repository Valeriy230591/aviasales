import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
<<<<<<< HEAD
import store from "./store/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><App /></Provider>
=======
import { Provider } from 'react-redux';
import store from './store/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}> <App /></Provider>
>>>>>>> 7dc6139fa486c08ece341ada3484755e98a7bcb8
);


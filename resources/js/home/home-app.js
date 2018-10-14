// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

const mainElement = document.querySelector('#homeContent');

if(!mainElement) 
    console.error('couldnt find home component');

import Store from './store';

import Home from './HomeComponent';

ReactDOM.render(
    <Provider store={Store}><Home /></Provider>,
    mainElement
);
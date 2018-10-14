import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

const mainElement = document.querySelector('#homeContent');

if(!mainElement) 
    console.error('couldnt find home component');

import Home from './HomeComponent';

ReactDOM.render(
    <Provider store={store}> <Home /> </Provider>,
    mainElement
);
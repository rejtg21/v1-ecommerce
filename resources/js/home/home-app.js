import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

const mainElement = document.querySelector('#homeContent');

if(!mainElement) 
    return console.error('couldnt find home component');

const HomeApp = () => {
    return (
        
    )
}

ReactDOM.render(
    <Provider store={store}> <HomeApp /> </Provider>,
    mainElement
);
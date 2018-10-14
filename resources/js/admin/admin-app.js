// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

const mainElement = document.querySelector('#adminContent');

if(!mainElement) 
    console.error('couldnt find admin element');

import Store from './store';

import ProductComponent from './product/ProductComponent';

const AdminComponent = () => {
    return (
      <div  className = "container"> 
        <ProductComponent />
      </div>
    );
}

ReactDOM.render(
    <Provider store={Store}><AdminComponent /></Provider>,
    mainElement
);
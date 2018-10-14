const translation = window.translations.home;

import React from 'react';

import ProductContainer from './product/ProductContainer';

const HomeComponent = () => {
    return (
      <div  className = "container"> 
        <div className = "d-flex justify-content-center">
          <h1>{translation.head.title}'</h1>
        </div>
        <div className = "row">
          <p>{translation.head.description}</p>
        </div>
        <hr className="clearfix"></hr>
        <ProductContainer />
      </div>
    );
}

export default HomeComponent
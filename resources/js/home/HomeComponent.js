const translation = window.translations.home;

import React from 'react';

import ProductContainer from './product/ProductContainer';
import {Button} from 'reactstrap';

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
        <Button onClick={()=> {
          window.location.href='admin'
        }}>Admin</Button>
        <ProductContainer />
      </div>
    );
}

export default HomeComponent
const translation = window.translations.admin.product;
// needed by webpack
import React from 'react';

import ProductContainer from './ProductContainer';
import {Button} from 'reactstrap';

const ProductComponent = () => {
    return (
      <div> 
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

export default ProductComponent
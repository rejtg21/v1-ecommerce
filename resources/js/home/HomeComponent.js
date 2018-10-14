const translation = windows.translation.home;

import ProductComponent from './product/ProductComponent';

const HomeComponent = () => {
    return (
      <div  class = "container"> 
        <div class = "d-flex justify-content-center">
          <h1>{translation.head.title}')</h1>
        </div>
        <div class = "row">
          <p>{translation.head.description}</p>
        </div>
        <hr class="clearfix"></hr>
        <ProductComponent />
      </div>
    );
}

export default HomeComponent
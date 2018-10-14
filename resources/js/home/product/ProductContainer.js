import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getProductLists} from './product.action';

import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

class ProductContainer extends React.Component {

    constructor(props) {
        super(props)

        this.translation = window.translations.home.product;
        
    }
    
    componentDidMount() {
        this.props.getProductLists().then(() => {});
    }

    showProductList() {
        return this.props.products.map((product) => {
            //per product create a card 
            // temporary the image will be all the same
            let subtitle = `${product.currency.symbol} ${product.price}`;
            if(product.discount) {
                console.log('discounted?');
                // need to translate
                subtitle = (
                    <p>
                        <big>Now {product.currency.symbol} {product.price * product.discount * 100}</big>
                        <small><strike>Before {product.currency.symbol} {product.price} </strike> </small>
                        <b>{product.discount} % OFF</b>
                    </p>
                );
            }

            return (
                <Card key={product.id}>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                    <CardText>{product.description}</CardText>
                    <Button title={this.translation.button.purchase.title}>
                        {this.translation.button.purchase.name}</Button>
                  </CardBody>
                </Card>
            );
        });
    }

    render() {

        return (
            <div className = "row">
                {this.showProductList()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.product.lists,
    }
}

const mapDispatchToProps = (dispatch) =>  {
    return bindActionCreators({
        getProductLists, 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

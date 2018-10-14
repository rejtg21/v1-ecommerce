import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

import Prompt from '../../shared/prompt';

class ProductAddFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                description: '',
                currency_id: '',
                price: '',
                discount: '',
                product_type_id: '',
            },
            currencies: []
        }
        this.translation = window.translations.admin.product.form

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    _generateCurrencyOptions() {
        if(!this.props.currencies || !this.props.currencies.length) return;

        return this.props.currencies.map((currency)=>{
            return (
                <option key={currency.id} value={currency.id}>{currency.symbol}</option>
            );
        });
    }

    _generateTypeOptions() {
        return this.props.types.map((type)=>{
            return (
                <option  key={type.id} value={type.id}>{type.name}</option>
            );
        });
    }

    saveForm() {
        let data = {...this.state.form};
        this.props.saveProduct(data).then((response) => {
            Prompt.success(response.message)
        }, (error)=> {
            console.log(error.data);
            Prompt.error(error.message);
        })
    }

    handleInputChange(e) {
        const target = e.target;
        const name = e.target.name;
        let form = {...this.state.form}
        form[name] = target.value;

        this.setState({
            form: form
        });
    }

    render () {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>{this.translation.head.add.title}</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="productName">{this.translation.name.label}</Label>
                      <Input type="text" name="name" value={this.state.form.name} id="productName" 
                        placeholder={this.translation.name.placeholder}  onChange={ this.handleInputChange }></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="productDescription">{this.translation.description.label}</Label>
                      <Input type="textarea" name="description" value={this.state.form.description} id="productDescription" 
                      placeholder={this.translation.description.placeholder} onChange={ this.handleInputChange }/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="productCurrency">{this.translation.currency.label}</Label>
                      <Input type="select" name="currency_id" id="productCurrency" value={this.state.form.currency_id}
                        onChange={ this.handleInputChange }>
                        <option value="">{this.translation.currency.placeholder}</option>
                        {this._generateCurrencyOptions.call(this)}
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="productPrice">{this.translation.price.label}</Label>
                      <Input type="text" name="price" value={this.state.form.price} id="productPrice" 
                      placeholder={this.translation.price.placeholder} onChange={ this.handleInputChange } />
                    </FormGroup>
                    <FormGroup>
                      <Label for="productDiscount">{this.translation.discount.label}</Label>
                      <Input type="text" name="discount" value={this.state.form.discount} id="productDiscount" 
                      placeholder={this.translation.discount.placeholder} onChange={ this.handleInputChange } />
                    </FormGroup>
                    <FormGroup>
                      <Label for="productType">{this.translation.type.label}</Label>
                      <Input type="select" name="product_type_id"  value={this.state.form.product_type_id} id="productType"
                      onChange={ this.handleInputChange }>
                        <option value="">{this.translation.type.placeholder}</option>
                        {this._generateTypeOptions.call(this)}
                      </Input>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.saveForm.bind(this)} title={this.translation.button.save.title}>{this.translation.button.save.name}</Button>
                    <Button color="secondary" onClick={this.props.toggleClose} title={this.translation.button.close.title}>{this.translation.button.close.name}</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ProductAddFormContainer;
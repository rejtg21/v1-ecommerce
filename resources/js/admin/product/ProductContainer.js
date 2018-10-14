import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getProductLists, getCurrencies, getTypes, saveProduct} from './product.action';

import ReactTable from 'react-table';

import {Button} from 'reactstrap';

import ProductAddFormComponent from './ProductAddFormComponent';

class ProductContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: this._getColumns(),
            // pages: 1,
            // data: [],
            loading: true,
            isOpen: false
        };

        this.translation = window.translations.admin.product;
        
    }

    _getColumns() {
        return [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Price',
            accessor: 'price'
        }, {
            Header: 'Discount',
            accessor: 'discount'
        },
        {
            Header: 'Action',
            filterable: false,
            // Cell: cellInfo => {
            //     return (
            //         //edit here
            //     )
            // }
        }];
    }

    componentDidMount() {
        this.props.getProductLists().then(() => {
            this.setState({
                loading: false
            });
        });
        this.props.getCurrencies();
        this.props.getTypes();
    }


    // reload() {
    //     //react table trigger of reload
    //     this.tableInstance.fireFetchData();
    // }

    // getTableInstance(tableInstance) {
    //     this.tableInstance = tableInstance;
    // }

    // fetchData(data) {
    //     let serverParam = {
    //         pageSize: data.pageSize,
    //         page: data.page,
    //         filtered: data.filtered,
    //         sorted: data.sorted
    //     };

    //     this.setState({
    //         loading: true
    //     });

    //     return this.props.getProductLists(serverParam).then(() => {
    //         this.setState({
    //             loading: false
    //         });
    //     });
    // }

    openModal() {
        this.setState({
            isOpen: true
        });
    }

    toggleClose() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Button title={this.translation.button.add.title} onClick={this.openModal.bind(this)}>{this.translation.button.add.name}</Button>
                </div>
                <div className = "row">
                <ReactTable
                    // data to be rendered
                    data={this.props.products}
                    // total no. of pages
                    pages={this.props.pages}
                    // column definition
                    columns={this.state.columns}
                    // checking if it is loading
                    loading={this.state.loading}
                    // handling ref of react table
                    // ref={this.getTableInstance.bind(this)}
                    // // handling of fetching of data
                    // onFetchData={this.fetchData.bind(this)}
                    // // it means we wil handle data in server side
                    // manual
                    defaultPageSize={10}
                    filterable
                    />
                    <ProductAddFormComponent currencies={this.props.currencies} types={this.props.types} 
                        isOpen={this.state.isOpen} toggleClose={this.toggleClose.bind(this)}
                        saveProduct={this.props.saveProduct}
                        />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.product.lists,
        // pages: state.product.pages,
        currencies: state.product.currencies,
        types: state.product.types
    };
}

const mapDispatchToProps = (dispatch) =>  {
    return bindActionCreators({
        getProductLists, 
        getCurrencies,
        getTypes,
        saveProduct
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

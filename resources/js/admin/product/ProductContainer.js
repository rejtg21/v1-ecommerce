import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getProductLists} from './product.action';

import ReactTable from 'react-table';


class ProductContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: this._getColumns(),
            // pages: 1,
            // data: [],
            loading: true
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

    render() {
        return (
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
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.product.lists,
        // pages: state.product.pages,
    };
}

const mapDispatchToProps = (dispatch) =>  {
    return bindActionCreators({
        getProductLists, 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

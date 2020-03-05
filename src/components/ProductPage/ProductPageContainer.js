import React from "react";
import ProductPage from "./ProductPage";
import {connect} from "react-redux";
import {getProduct} from "../../reducers/productsReducer";
import {withRouter} from "react-router-dom";
import {
    getCurrentPageSelector, getPageSizeSelector,
    getProductsCountSelector,
    getProductSelector,
    getProductsSelector
} from "../../reducers/products-selectors";

class ProductPageContainer extends React.Component {

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }

    state = {
        productMenuNavigator: "Main"
    };

    changeProductMenuNavigator = (value) => {
        this.setState({
            productMenuNavigator: value
        })
    };

    render() {
        return (
            <ProductPage {...this.props}
                         productMenuNavigator={this.state.productMenuNavigator}
                         changeProductMenuNavigator={this.changeProductMenuNavigator}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
        product: getProductSelector(state),
        currentPage: getCurrentPageSelector(state),
        productsCount: getProductsCountSelector(state),
        pageSize: getPageSizeSelector(state),
    }
};

export default connect(mapStateToProps, {getProduct})(withRouter(ProductPageContainer));

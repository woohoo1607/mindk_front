import React from "react";
import ProductPage from "./ProductPage";
import {connect} from "react-redux";
import {getProduct} from "../../reducers/productsReducer";
import {withRouter} from "react-router-dom";

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
            <ProductPage products = {this.props.products}
                         productMenuNavigator={this.state.productMenuNavigator}
                         changeProductMenuNavigator={this.changeProductMenuNavigator}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, {getProduct})(withRouter(ProductPageContainer));

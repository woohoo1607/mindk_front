import React from "react";
import ProductPage from "./ProductPage";
import {connect} from "react-redux";
import {getProduct} from "../../reducers/productsReducer";
import {withRouter} from "react-router-dom";

class ProductPageContainer extends React.Component {

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }

    render() {
        return (
            <ProductPage products = {this.props.products}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, {getProduct})(withRouter(ProductPageContainer));

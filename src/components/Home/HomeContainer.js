import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getProducts} from "../../reducers/productsReducer";
import {getProductsSelector} from "../../reducers/products-selectors";

class HomeContainer extends React.Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <Home {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
    }
};

export default connect(mapStateToProps, {getProducts})(HomeContainer);

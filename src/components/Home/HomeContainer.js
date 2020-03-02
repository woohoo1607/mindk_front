import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getProducts} from "../../reducers/productsReducer";

class HomeContainer extends React.Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <Home products = {this.props.products}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, {getProducts})(HomeContainer);

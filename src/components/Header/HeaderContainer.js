import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Header from './Header';
import {getUserSelector, isAuthSelector} from "../../selectors/user-selectors";
import {getMe} from "../../reducers/userReducer";
import {getIsOpenCartSelector, getProductsCountCartSelector} from "../../selectors/cart-selectors";
import {getProductsCart, setIsOpen} from "../../reducers/cartReducer";


const HeaderContainer = (props) => {
    useEffect( ()=> {
        props.getMe();
        props.getProductsCart();
    }, [props.user.token]);

    const openCart = () => {
        props.setIsOpen(true);
    };

    const closeCart = () => {
        props.setIsOpen(false);
    };

    return (
        <div>
            <Header user={props.user}
                    isAuth={props.isAuth}
                    openCart={openCart}
                    closeCart={closeCart}
                    countProductsCart={props.countProductsCart}
            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
        isAuth: isAuthSelector(state),
        isOpenCart: getIsOpenCartSelector(state),
        countProductsCart: getProductsCountCartSelector(state),
    }
};

export default connect(mapStateToProps, {getMe, setIsOpen, getProductsCart})(HeaderContainer);

import React from 'react';
import {Route, Switch} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import AfterHeader from "./components/AfterHeader/AfterHeader";
import HomeContainer from "./components/Home/HomeContainer";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import OrderPageContainer from "./components/OrderPage/OrderPageContainer";
import CatalogContainer from "./components/Catalog/CatalogContainer";
import CheckoutContainer from "./components/Checkout/CheckoutContainer";
import PopUp from "./components/PopUp/PopUp";
import './App.css';
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">

        <HeaderContainer />
        <div className="clr"></div>
        <div className="split"></div>
        <AfterHeader />
        <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/login' component={LoginContainer} />
            <Route path='/products/:id' component={ProductPageContainer} />
            <Route exact path='/profile' component={ProfileContainer} />
            <Route path='/orders/:id' component={OrderPageContainer} />
            <Route path='/catalog' component={CatalogContainer} />
            <Route path='/checkout' component={CheckoutContainer} />
            <Route component={NotFound} />
        </Switch>
        <PopUp />
    </div>
  );
}

export default App;

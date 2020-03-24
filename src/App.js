import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import AfterHeader from "./components/AfterHeader/AfterHeader";
import HomeContainer from "./components/Home/HomeContainer";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import OrderPageContainer from "./components/OrderPage/OrderPageContainer";
import CatalogContainer from "./components/Catalog/CatalogContainer";

function App() {
  return (
    <div className="App">

        <HeaderContainer />
        <div className="clr"></div>
        <div className="split"></div>
        <AfterHeader />

        <Route exact path='/' render={ () => <HomeContainer /> }/>
        <Route exact path='/login' render={ () => <LoginContainer /> }/>
        <Route path='/products/:id' render={ () => <ProductPageContainer /> }/>
        <Route exact path='/profile' render={ () => <ProfileContainer /> }/>
        <Route path='/orders/:id' render={ () => <OrderPageContainer /> }/>
        <Route path='/catalog' render={ () => <CatalogContainer /> }/>
    </div>
  );
}

export default App;

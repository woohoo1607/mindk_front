import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import AfterHeader from "./components/AfterHeader/AfterHeader";
import HomeContainer from "./components/Home/HomeContainer";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";

function App() {
  return (
    <div className="App">

        <HeaderContainer />
        <div className="clr"></div>
        <div className="split"></div>
        <AfterHeader />

        <Route exact path='/' render={ () => <HomeContainer /> }/>
        <Route path='/products/:id' render={ () => <ProductPageContainer /> }/>
    </div>
  );
}

export default App;

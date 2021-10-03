import React from 'react';
import './shoppro.css'
import Footer from '../Footer';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Signin from "../Signin";

const ShopPro=()=>{


    return(<div className="shop-pro">
<div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logo.png" className="product-logo" />
        </Link>
        </div>
        <Mynavbar/>

<Signin/>



        <Footer/>
    </div>)
}
export default ShopPro;
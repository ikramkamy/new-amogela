import React, { useState ,useEffect} from 'react';
import './shoppro.css'
import Footer from '../Footer';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Signin from "../Signin";
import ProduitPro from '../Produit/ProduitsPro';
import axios from 'axios';
const ShopPro=()=>{
const [products,setProducts]=useState([]);
const [barquette,setBarquette]=useState([
  {
    name:"bac de glace",
   gout:"Fraise/vanille",
    img:"/images/bacdeglace.jpg"
  }
]);

/*
    useEffect(() => {
        //this to execute oncly once
        axios.get('/api/produitsStock')
      .then(res => {
        const data=res.data;
        setProducts (data);
      
      }) 
      .catch(function (error) {
          console.log(error);
      })
      axios.get('/api/Barquettes')
      .then(res => {
        const data=res.data;
        setBarquette (data); 
      })
      .catch(function (error) {
          console.log(error);
      })
      
      }, [barquette]);
      */
    return(<div className="shop-pro">
<div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logos.jpg" className="product-logo" />
        </Link>
        </div>
        <Mynavbar/>
        <div className="histoire-wrapper">
<div className="Pagename"> Shop Professionnel</div>
<div className="shop-items-pro">


    {barquette?.map((e)=><ProduitPro name={e.name} prix={e.gout} purl={e.img}/>)}
</div>
</div>


        <Footer/>
    </div>)
}
export default ShopPro;
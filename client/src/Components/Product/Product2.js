import React, { useState, useContext,useEffect } from 'react';
import './product.css';
import axios from "axios";
import { FaShoppingBag, FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import Produit from "../Produit";
import Produitstock from "../Produit/Produitstock";
import "./product.css";
import Footer from '../Footer';
import Filter from "../Filter";
import { getProductsBycath } from "../../actions/productActions";
export const Product2=()=>{
    const [barquette,setBarquette]=useState([]);
    const [products,setProducts]= useState([]);
    const [cathegorie, setCathegorie]=useState("Barquette");
    const [menuOpenState, setMenuOpenState] = useState(false);
    const [items, setItems] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
   const [counter, setCounter] = useState(0);
   const handleCount = () => {
      setCounter(2);
    };
  const Handelopne = () => {
      setIsOpen(true);
      console.log("the value is", isOpen);
    };
    const handleStateChange = () => {
      setIsOpen(true);
    };
    const [cart,setCart]=useState([]);
    console.log("the cart legnth is ",cart.length)
    const [count, setCount]=useState(cart.length);
   // const [showme,setShowme]=true;
  const handleClick=()=>{setCount(cart.length)};
  const addproduct=(product)=>{
  setCount(cart.length)
  console.log("we are in add to cart")
  setCart([...cart,product])
  console.log(cart)
  }
  
  
  useEffect(() => {     
    const getData = async () => {  
      await axios.get(`/cathegorie/${cathegorie}`)  
      .then(res => {  
        console.log(res) 
        const data=res.data.data;
        setBarquette(data);
      })  
      .catch(err => {  
        console.log(err)  
      });  
    }  
 getData()  
  }, [])
    return(
    <div className="product" >
    
      <div className="nav-shop">
      <a href="/home" className="image-wrapper">
          <img src="/images/logoamo.png" className="product-logo" />
        </a>

        <div className="shoping-cart-icon">
       
      
         <FaShoppingBag className="icon-shoping" />
          <div className="items">{counter}</div>
        </div>
      </div>
     
      
<Filter />
     
     <div className="deco-th-style">
      <div className="shop-items">
      
{barquette.map((e)=><Produit purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id} addproduct={addproduct} />)}

</div>
      </div>
      
     
      <Footer/>
    </div>
  );
};




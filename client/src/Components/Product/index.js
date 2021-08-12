import React, { useState, useContext,useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import Produit from "../Produit";
import "./product.css";
import Footer from '../Footer';

const Product = (props) => {
  const [barquette,setBarquette]=useState([]);
  const [products,setProducts]= useState([]);
  const MyContext = React.createContext();
  const [input, setInput] = useState({
    gout1: "",
    gout2: "",
    gout3: "",
    gout4: "",
    quantite: "",
  });
  const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false);
  };
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [items, setItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
 
  const [counter, setCounter] = useState(0);
  
  const handleCount = () => {
    setCounter(2);
  };
  const handelChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
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
/******************************fetching data with axios****************************/
axios.get('/getAllbarquettes')
.then(res => {
  const data=res.data;
  setBarquette (data);
  console.log('barquette',barquette)
  
})
.catch(function (error) {
    console.log(error);
})
/********************************************************************************* */
/*******************************fetching data with axios*****************************/
axios.get('/getproduit')
.then(res => {
  const data=res.data;
  setProducts (data);
  console.log('products',products)
  
})
.catch(function (error) {
    console.log(error);
})
  return (
    <div className="product" >
    
      <div className="nav-shop">
      
        <MyContext.Provider
          value={{
            isMenuOpen: menuOpenState,
            toggleMenu: () => setMenuOpenState(!menuOpenState),
            stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
          }}
        >
          {props.children}
        </MyContext.Provider>
        <Menu
          onStateChange={handleStateChange}
          className="burger-menu"
          customBurgerIcon={<FaBars className="FaBars" onClick={Handelopne} />}
        >
          
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        

        <a href="/home">
          <img src="/images/logoamo.png" className="product-logo" />
        </a>

        <div className="shoping-cart-icon">
        <FaFacebook className="icon-shoping" />
        <FaInstagram className="icon-shoping" />
          <FaShoppingBag className="icon-shoping" />
          <div className="items">{items}</div>
        </div>
      </div>
     
      <div
        className="product-backg-container"
        style={{ backgroundImage: "url(/images/5.jpg)" }}
      >
        <div className="sevice-name">
          Clickez & Retirez
          <h3>Amogela</h3>
        </div>
      </div>

      <div className="shop-items">

{barquette.map((e)=><Produit purl={e.img} pname={e.name} pprice={e.prix} addproduct={addproduct}/>)}

   
      </div>


      <div className="shop-items">

{products.map((e)=><Produit purl={e.img} pname={e.name} pprice={e.prix} addproduct={addproduct}/>)}

   
      </div>
      <Footer/>
    </div>
  );
};
export default Product;

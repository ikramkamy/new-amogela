import React, { useState, useContext,useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import Produit from "../Produit";
import Produitstock from "../Produit/Produitstock";
import "./product.css";
import Footer from '../Footer';
import Filter from "../Filter";
import { getProductsBycath } from "../../actions/productActions";
import Mynavbar from "../Mynavbar";
import { useParams,useHistory } from 'react-router-dom';
import {loginUser} from '../../actions/productActions.js';
import { Link } from 'react-router-dom';
import Signin from '../Signin';
const Product = (props) => {
  const history = useHistory();
  const [barquette,setBarquette]=useState([]);
  const [products,setProducts]= useState([]);
  const [cathegorie, setCathegorie]=useState("Barquette");
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [items, setItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [cart,setCart]=useState([]);
  const token=localStorage.getItem('token');
  console.log("i m in product page token is here",token);

  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
  key: "value"
};


const Handelopne = () => {
    setIsOpen(true);
    console.log("the value is", isOpen);
  };
  const handleStateChange = () => {
    setIsOpen(true);
  };
  
  console.log("the cart legnth is ",cart.length)
  const [count, setCount]=useState(cart.length);
 // const [showme,setShowme]=true;
const handleClick=()=>{setCount(cart.length)};
const addproduct=(product)=>{

if(token===null){
  const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close")
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    })
console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")

loginUser();
}else{
setCounter(cart.length);
console.log("we are in add to cart")
setCart([...cart,product])
console.log(cart);
/************************** */
//************            product to mu user cart  ******************************/
//event.preventDefault();

console.log("we are posting ")
const cartItems={
  "cart" :{
    id:product._id,
    name:product.name,
    prix:product.prix,
    gout1:product.gout1,
    gout2:product.gout2,
    gout3:product.gout3,
    gout4:product.gout4,

  }
   
}
console.log(cartItems);
axios.post("/addToCartUser",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
.then(response => {
 console.log("post with axios succed")
}).catch(error => {
  console.log("the raison of failure", error) 
});
}
}

useEffect(() => {
  //this to execute oncly once
  axios.get('/getproduit')
.then(res => {
  const data=res.data;
  setProducts (data);
  
  
})
.catch(function (error) {
    console.log(error);
})
axios.get('/getAllbarquettes')
.then(res => {
  const data=res.data;
  setBarquette (data);
  
  
})
.catch(function (error) {
    console.log(error);
})

}, []);
/**********************************Geting the cart to bring the length************************** */
const user_id=localStorage.getItem('user_id');
console.log("USER FROM LOCAL STORAGE",user_id)
const[usercart,setUsercart]=useState([]);
const [mycart,setMyCart]=useState([]);

console.log("idsplited",0)

useEffect(() => {
  const expensesListResp = async () => {
    await axios.get(`/getMycartUserprofile/${user_id}`)
    .then(response =>setUsercart(response.data))

     }
  expensesListResp();
}, []);
console.log("we are getting the cart",usercart); 
useEffect(()=>{

setMyCart(usercart.cart);
console.log("we are setting your cart",mycart);
/*
setCounter(mycart.length);
console.log("COUNTER",counter);
*/

}) 
useEffect(()=>{

  console.log("COUNTER",counter);


})
/*************************************POPUP SIGN IN***************************** */






/******************************************************************************** */
/************************************************************************************* */
const getbyID=(e)=>{
  
  console.log("we are getting the id")
}

  return (
    <div className="product" >
  <div className="nav-shop">
        <Link to="/home" className="image-wrapper">
          <img src="/images/logo.png" className="product-logo" />
        </Link>
        </div>
<div className="shoping-cart-icon">
<div className="tite-panier" >Mon panier</div>
<FaShoppingBag className="icon-shoping" onClick={() => {history.push(`/shopingcart/:${user_id}`) }} />
          
        </div>
       
<Mynavbar/>  
<Filter />
     
     <div className="deco-th-style">
      <div className="shop-items">
      
{barquette?.map((e)=>

<Produit  purl={e.img} pname={e.name} pprice={e.prix} prodID={e._id} addproduct={() => addproduct(e)}/>)}
</div>
      </div>
      <div className="deco-th-style2"> 
      <div className="shop-items">
{products.map((e)=><Produitstock purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id} addproduct={() => addproduct(e)} />)}  

     </div>
  


 </div>
 <div className="js-btn"></div>
<div class="modal">
   <div class="modal_content">
     <span class="close">&times;</span>
     <img src="/images/logoamo.png"/>
    <Signin/>
     <p>Votre Shoping Cart est vide SVP sellectionez des produits</p>
     amogela
   </div>
</div>
      <Footer/>
    </div>
  );
};
export default Product;

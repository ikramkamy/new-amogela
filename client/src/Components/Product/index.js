import React, { useState, useContext,useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaWindowClose } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import Produit from "../Produit";
import Produitstock from "../Produit/Produitstock";
import "./product.css";
import Footer from '../Footer';
import Filter from "../Filter";
import {getProductsBycath} from "../../actions/productActions";
import Mynavbar from "../Mynavbar";
import {useParams,useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Signin from '../Signin';
import ShopinCart from "../Shopingcart";
import {getuser} from '../../actions/productActions';
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
  const [incriment,setIncriment]=useState(0);
  const [incriment2,setIncriment2]=useState(0)
  const token=localStorage.getItem('token');


  const config = { 
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
  key: "value"
};
const Handelopne = () => {
    setIsOpen(!isOpen);
    setIncriment2(incriment2+1)
    setIncriment(incriment+1);
    };
  const handleStateChange = () => {
    setIsOpen(true);

  };
  

const addproduct=(product)=>{

if(token===null){
  const modal = document.querySelector(".modal")
    const closeBtn3 = document.querySelector(".close3")
    modal.style.display = "block";
    closeBtn3.addEventListener("click", () => {
      modal.style.display = "none";
    })
console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
}else{

  
console.log("we are in add to cart")
setCart([...cart,product])
console.log(cart);

//event.preventDefault();

console.log("we are posting")
const cartItems={
  "cart" :{
    id:product._id,
    img:product.img,
    name:product.name,
    prix:product.prix,
    gout1:product.gout1,
    gout2:product.gout2,
    gout3:product.gout3,
    gout4:product.gout4,
}
}
//console.log(cartItems);
axios.post("/addToCartUser",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
.then(response => {
 //console.log("post with axios succed")
 //window.location.reload()
 setIncriment(incriment+1);

 setIsOpen(!isOpen);
}).catch(error => {
 // console.log("the raison of failure", error) 
});
}
}

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

}, []);
/**********************************Geting the cart to bring the length************************** */
const user_id=localStorage.getItem('user_id');
const[usercart,setUsercart]=useState([]);
const [mycart,setMycart]=useState([]);
const [cartlength,setCartlength]=useState(0)
useEffect(() => {
const expensesListResp = async () => {
    await axios.get(`/getMycartUserprofile/${user_id}`)
    .then(response =>setUsercart(response.data))
}
  expensesListResp();

},[incriment]);

useEffect(()=>{
let n=0;
setMycart(usercart.cart);
mycart?.map((e)=>{n=n+e.quantity})
setCartlength(n);
console.log("function calcul legnth",usercart)
}) 

/*********************************POPUP SIGN IN***************************** */
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
/******************************************************************************** */
/************************************************************************************* */

const [bl,setBl]=useState(true);
  return (
    <div className="product" >
  <div className="nav-shop">
        <Link to="/home" className="image-wrapper">
          <img src="/images/logos.jpg" className="product-logo" />
        </Link>
        </div>
<div className="shoping-cart-icon">
<div className="tite-panier" >{cartlength}</div>
<FaShoppingBag className="icon-shoping" onClick={Handelopne } />
<div className="tite-panier" >{cartlength}</div>      
</div>
       
<Mynavbar/>  
<Filter />
 
     <div className="deco-th-style">
      <div className="shop-items">
      
{barquette?.map((e)=>

<Produit  disponible={e.disponible} 


purl={e.img} pname={e.name} pprice={e.prix} prodID={e._id} />)}
</div>
      </div>
      <div className="deco-th-style2"> 
      <div className="shop-items">
{products?.map((e)=><Produitstock

bl={e.disponible==="non disponible"}
disponible={e.disponible}  purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id} addproduct={() => addproduct(e)} />)}  

     </div>
  
{isOpen &&

(<div class="modal-side-shop">
<div className="side-shop" >
<div className="shoping-cart-icon">
<FaWindowClose className="icon-Close-cart" onClick={Handelopne}/>
</div> 
  <ShopinCart incriment2={incriment2}/>
  </div>
  </div>)
}
    
 </div>
 <div className="js-btn"></div>
<div class="modal">

   <div class="modal_content-signin">
   <span class="close3">&times;</span> 
     
    <Signin/>
     
   </div>
</div>
      <Footer/>
    </div>
  );
};
export default Product;

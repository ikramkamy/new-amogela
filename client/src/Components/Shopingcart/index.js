import React,{useState,useEffect} from 'react';
import './shopingcart.css';
import Facture from "../Facture"
import Cart from './Cart.js';
import axios from "axios";
import { Link } from 'react-router-dom';
import Mynavbar from '../Mynavbar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import  DatePicker from "react-datepicker";
import Mod from '../Mod';

const ShopinCart=(props)=>{
const token=localStorage.getItem('token');
/*********************************favture***************************** */
const [valide,setValide]=useState(false);
const handelValide=()=>{
  setValide(!valide);
}
const [names,setNames]=useState([]);
const [somme,setSomme]=useState(0);
const [lnth,setLnth]=useState(0);

const setvalSomme =()=>{
let n=0;
  mycart?.map((e)=>n=n+ parseInt(e.prix.split(" ")[0])*e.quantity)
  setSomme(n);
  console.log("sommevalue here",somme);
   if(mycart?.length===0){
    setValide(false)
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close")
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    })
  }else(setValide(!valide))
}

//********************************date picker***************************** */

  const [startDate, setStartDate] = useState(new Date());
  console.log("the date and hour of your commande is",startDate);
  var date = new Date();
  date.setDate(date.getDate() + 1);
  JSON.stringify(startDate);
  console.log("date after stringifying",startDate);
  //date.setDate(date.getDate() + 1);
//********************************************************************* */
      //const {userId}=useParams();
      const user_id=localStorage.getItem('user_id');
     // console.log("ID from Params",userId)
      //let idsplited=user_id.split(":")[1];
     // console.log("idsplited",idsplited)
      const history = useHistory();
      console.log("HIstory info are here",history);
      const[usercart,setUsercart]=useState([]);
      const [mycart,setMyCart]=useState([]);
 /************************************************************************** */


/*********************************************************************************/
useEffect(() => {
            const expensesListResp = async () => {
              await axios.get(`/getMycartUserprofile/${user_id}`)
              .then(response =>setUsercart(response.data))
               }
            expensesListResp();
          });
          console.log("we are getting the cart",usercart.cart); 
         useEffect(()=>{

          setMyCart(usercart.cart);
          console.log("we are setting your cart",mycart);
          
          }) 
        
        
   // const {addproduct,removeproduct}=props;
/*********************Sending Clic et retirer commande***************** */
const handelClick=(event)=>{
  event.preventDefault();
  if(somme==!0){
  console.log("we are posting commande ")
  const command={
  cart:mycart,
  user:usercart,
  time:startDate,
  somme:somme,
  }
  console.log("COMMANDE",command);
  axios.post("/clickretire",command)
  .then(response => {
   console.log("post with axios succed the commande")
  }).catch(error => {
    console.log("the raison of failure", error) 
  });
}else{

  const command={
    cart:mycart,
    user:usercart,
    time:startDate,
    somme:somme,
    }
    console.log("COMMANDE",command);
    axios.post("/clickretire",command)
    .then(response => {
     console.log("post with axios succed the commande")
    }).catch(error => {
      console.log("the raison of failure", error) 
    });
}
/*
  axios.delete(`/Clearcard/${user_id}`)
  .then(response => {
    console.log("DELETE with axios succed")
   }).catch(error => {
     console.log("the raison of failure", error) 
   });
   */
  }

/*************************************adding quntity************************** */
const addproduct=(product)=>{
 
  /************************** */
  //************            product to mu user cart  ******************************/
  //event.preventDefault();
  
  console.log("we are posting ")
  const cartItems={
    "cart" :{
      id:product.id,
      img:product.img,
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
/********************************POP-UP***************************/
useEffect(()=>{
  let n=0;
  mycart?.map((e)=>n=n+ parseInt(e.prix?.split(" ")[0])*e.quantity)
  setSomme(n);
  setLnth(mycart?.length);
})

/***************************************************************** */
 /**********************************DELETE PRODUCT*************************** */
 const Deletitem=(e)=>{
  const id={ 
    id: e.id
   };
console.log("THE ID FROM CART",id)
 axios.post("/DeletefromCartUser",id,{ headers: {"Authorization" : `Bearer ${token}`} })
 .then(response => {
  console.log("DELETED ITEMM",response)

  //setIsOpen(!isOpen);
 }).catch(error => {
   console.log("ERRER DELETED ITEMM", error) 
 });

 }
/**********************************MIINUS ITEM************** */
const Minesone=(e)=>{
  if(e.quantity===0){
    alert("La quantitée est 0, cliquez sur supprimer")
  console.log("MINUS PRODUCT BEFOR SIGN IN")
  }else{
  
 /************************** */
  //************            product to mu user cart  ******************************/
  //event.preventDefault();
  
  console.log("we are MINUSING")
  const cartItems={
    "cart" :{
      id:e.id,
      img:e.img,
      name:e.name,
      prix:e.prix,
      gout1:e.gout1,
      gout2:e.gout2,
      gout3:e.gout3,
      gout4:e.gout4,
  }
  }
  console.log(cartItems);
  axios.post("/MinuOneItemCartUser",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
  .then(response => {
   console.log("MINUS")
  
  }).catch(error => {
    console.log("the raison of failure MINUS", error) 
  });
  }
 }

    return(
<div className="shopcart-wrapper" >
<div className="user-name">Mon panier :{usercart.username}</div>      
<div className="show">

     <div style={{height:"auto",top:"0px",position:"absolute",width:"100%",paddingLeft:"2%",paddingRight:"2%"}}>        

{mycart?.map((e)=><Cart  sname={e.name}  sprice={e.prix} gout1={e.gout1} gout2={e.gout2} gout3={e.gout3} gout4={e.gout4} squantity={e.quantity}  Deletitem={()=>  Deletitem(e)} img={e.img} Minesone={()=>Minesone(e)} addproduct={()=>addproduct(e)}/>)}
</div>  
</div>

<div className="footer-cart">
<div className="total-tag">
  <div className="total-tag-contain">
  Total : {somme}DA
  </div>
  </div>
<div className="wrap-this">
  <div className="cart-btn nohover" onClick={handelClick}>
  <Link to="/commadevalidee">Envoyer la commande </Link>
    </div>
    </div>
    </div>




<div className="js-btn"></div>
<div class="modal">
   <div class="modal_content">
     <span class="close">&times;</span>
     <img src="/images/logoamo.png"/>
     <p>Votre Shoping Cart est vide SVP sellectionez des produits</p>
     amogela
   </div>
    </div>


    </div>)
}
export default ShopinCart;
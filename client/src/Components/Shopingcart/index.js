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
const ShopinCart=(props)=>{
  const token=localStorage.getItem('token');
/*********************************favture***************************** */
const [valide,setValide]=useState(false);
const handelValide=()=>{
  setValide(!valide);
}
const [names,setNames]=useState([]);
const [somme,setSomme]=useState(0);

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
//********************************************************************** */
      const {userId}=useParams();
      console.log("ID from Params",userId)
      let idsplited=userId.split(":")[1];
      console.log("idsplited",idsplited)
      const history = useHistory();
      console.log("HIstory info are here",history);
      const[usercart,setUsercart]=useState([]);
      const [mycart,setMyCart]=useState([]);
 /*************************************************************************** */    
      useEffect(() => {
            const expensesListResp = async () => {
              await axios.get(`/getMycartUserprofile/${idsplited}`)
              .then(response =>setUsercart(response.data))
               }
            expensesListResp();
          }, []);
          console.log("we are getting the cart",usercart.cart); 
         useEffect(()=>{

          setMyCart(usercart.cart);
          console.log("we are setting your cart",mycart);
   
          
         }) 
        
       
   // const {addproduct,removeproduct}=props;
/*********************Sending Clic et retirer commande***************** */
const handelClick=(event)=>{
  event.preventDefault();
  console.log("we are posting commande ")
  const command={
  cart:mycart,
  user:usercart,
  time:startDate,
  somme:somme,
  }
  console.log(command);
  axios.post("/clickretire",command)
  .then(response => {
   console.log("post with axios succed")
  }).catch(error => {
    console.log("the raison of failure", error) 
  });


  axios.delete(`/Clearcard/${idsplited}`)
  .then(response => {
    console.log("DELETE with axios succed")
   }).catch(error => {
     console.log("the raison of failure", error) 
   });
  }
const deletitem=()=>{

}
/*************************************adding quntity************************** */
const addproduct=(product)=>{
 
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
/********************************POP-UP***************************/


/***************************************************************** */

    return(
<div className="shopcart-wrapper" >
          <Mynavbar/>
          <div className="show">
                Bienvenu chez Amogela : {usercart.username}<br/>
                Cliquez & Retirez

      <div className="table-cart principal">
           
             <div className="principal-item">Produit</div>
            <div className="principal-item">Prix</div>
             <div className="principal-item">Gout</div>
             <div className="principal-item">Quantité</div>

      </div>
     

{mycart?.map((e)=><Cart  sname={e.name}  sprice={e.prix} gout1={e.gout1} gout2={e.gout2} gout3={e.gout3} gout4={e.gout4} squantity={e.quantity} deletitem={(e)=>addproduct(e)}/>) }
</div>

<div className="validtaion-btns">
<div className="picker-wrapper">

Veuillez s'il vous plait M/Mme :{usercart.username}  selectionner la date et l'heure souhaitées pour votre commandre

    <div className="date-picker">  
      <DatePicker 
      className="date-picker-inter" 
      selected={date} 
      onChange={(date) => setStartDate(date)} 
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="LLL"
       dateFormat="Pp" minDate={date} dateFormat="d MMMM , yyyy h:mm aa"/>
  </div>
  </div>
<div className="cart-btn-wrapper"><button className="cart-btn nohover" onClick = {setvalSomme}  >
           VOIR LA SOMME
</button>
</div>
</div>



{valide &&
           (
<div className=" facture-finale">
  Cliquez & Retirez
<div className="facture-title"> M/Mme {usercart.username}Votre facture est prete</div>     
       <div className="blac-facture">
        
       <div className="facture-item">{mycart?.map((e)=><li>{e.name}</li> )}</div>
         <div className="facture-item">{mycart?.map((e)=><li>{e.prix}</li> )}</div>
         <div >{mycart?.map((e)=><li>{e.quantity}</li> )}</div>
         <div className="facture-item-total">
           
           
           {mycart?.map((e)=><li>{parseInt(e.prix.split(" ")[0])*e.quantity} DA</li> )}
           
           
           </div>
         
         </div> 
         <div>Vous pouvez récupérer votre commande:le{JSON.stringify(startDate).split("T")[0]} </div>
        
             à    <div>{JSON.stringify(startDate).split("T")[1].split(".")[0]}</div>
          
        
         <div className="montnat-total"  >{setvalSomme} Totale:{somme} DA</div> 


         
        <div className="wrap-this"><div className="cart-btn nohover" onClick={handelClick}><Link to="/commadevalidee">Envoyer la commande </Link></div></div>
         </div>
            
       

        )}



<div className="js-btn"></div>
<div class="modal">
   <div class="modal_content">
     <span class="close">&times;</span>
     <img src="/images/logoamo.png"/>
     <p>Votre Shoping Cart est vide SVP sellectionez des produits</p>
     amogela
   </div>
</div>
<Footer/>

    </div>)
}
export default ShopinCart;
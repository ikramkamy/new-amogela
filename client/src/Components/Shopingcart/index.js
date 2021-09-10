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
/*********************************favture***************************** */
const [valide,setValise]=useState(false);
const handelValide=()=>{
  setValise(!valide);
}
const [names,setNames]=useState([]);
const [somme,setSomme]=useState(0);
const setvalSomme =()=>{
let n=0;
  mycart.map((e)=>n=n+ parseInt(e.prix.split(" ")[0])*e.quantity)
  setSomme(n);
  console.log("sommevalue here",somme);
  setValise(!valide);
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
        
       
    const {addproduct,removeproduct}=props;
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
  }








    return(
<div className="shopcart-wrapper" >
          <Mynavbar/>
          <div className="show">
                Bienvenu chez Amogela : {usercart.username}
      <div className="table-cart principal">
           
             <div className="principal-item">Produit</div>
            <div className="principal-item">Prix</div>
             <div className="principal-item">Gout</div>
             <div className="principal-item">Quantité</div>

      </div>
     

{mycart?.map((e)=><Cart  sname={e.name}  sprice={e.prix} gout1={e.gout1} gout2={e.gout2} gout3={e.gout3} gout4={e.gout4} squantity={e.quantity}/>) }
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
            Valider Votre commande
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


         <div className="cart-btn-wrapper"><button className="cart-btn nohover">
            Envoyer la commande
        </button>
        <div    onClick={handelClick}>Envoyer la commande </div>
         </div>
            
        </div>

        )}

<Footer/>
    </div>)
}
export default ShopinCart;
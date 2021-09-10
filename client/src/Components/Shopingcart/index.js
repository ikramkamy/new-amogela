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
const [valide,setValise]=useState(true);
const handelValide=()=>{
  setValise(!valide);
}

//********************************date picker***************************** */

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  var date = new Date();
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

    return(<div className="shopcart-wrapper">
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
      <DatePicker className="date-picker-inter" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect
  dateFormat="Pp" minDate={date} dateFormat="d MMMM , yyyy h:mm aa"/>
  </div>
  </div>
<div className="cart-btn-wrapper"><button className="cart-btn nohover" onClick = {addproduct}  >
            Valider Votre commande
</button>
</div>


{valide &&(<div>




</div>)}







</div>
<Footer/>
    </div>)
}
export default ShopinCart;
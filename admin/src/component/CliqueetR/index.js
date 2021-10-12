import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import ClickList from './ClickList';
import './clique.css';

import axios from 'axios';

import {FaArrowDown, FaPlus} from "react-icons/fa";
import { useParams,useHistory } from 'react-router-dom';
const CliqueetR=(props)=>{
 
 
  const [clickcom,setClickcom]=useState([]);
  let {_id}=useParams();
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get("/getcommandeByType/Emporté")
      .then(response =>setClickcom(response.data))
   }
    expensesListResp();
    console.log('Clique et retiré commandes sont ici')
    console.log("clickcom", clickcom)
  },[clickcom]);

    const handelDelete=(user)=>{
    axios.delete(`/clearCommande/${_id}`,)
    
      .then()
     
      }


return(
<div className="utilisateurs">
 <div className="btn-create">
   
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
  <div className="user_info">
  <div className="item-user">Nom utilisateurs</div>      
  <div className="item-user">Télèphone</div>
  <div className="item-user">List d'achat</div>
  <div className="item-user"> La date</div>
  <div className="item-user"> Montant(DA) </div>
  <div className="item-user">Modifie</div>
  <div className="item-user">Supprimer</div>
  
  
  </div>

    
  {clickcom?.map((e)=><ClickList 
  username="ikram" list="Voire" 
   phone={e.user[0].phone} 
   commandDate={e.commandeType.commande.date}
 email={e.user[0].email} commandeType={e.commandeType.commande.command}
     handelDelete={(()=>handelDelete(e))}
     product={e.cart.name}
     somme={e.somme}
     cart={e.cart}
     _id={e._id}
  />)}

 </div>)
}
export default CliqueetR;
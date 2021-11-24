import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrash,FaEye} from "react-icons/fa";
import AchatList from '../CliqueetR/AchatList';
const LivraisonList=(props)=>{
const {handelDelete,cart,user}=props;
const[showAchat,setShowAchat]=useState(false);


const handelshow=()=>{

    setShowAchat(!showAchat)
}
//console.log("the cartis passed succesfully",cart)
    
return(
<div className="user_info">
<div className="item-user">{props.username}</div>      
  <div className="item-user">+213{props.phone}</div>
  <div className="item-user" style={{textAlign:"center"}}>
    <FaEye className="achat-list-icon"  onClick={handelshow}/>
    {showAchat &&(<AchatList product={props.product} cart={cart} user={user}  showhendel={handelshow}/>)}</div>
<div className="item-user" style={{textAlign:"center"}}>{props.commandDate}</div>
<div className="item-user" style={{textAlign:"center"}}>{props.commandheur}</div>
 <div className="item-user" style={{textAlign:"center"}}>{props.commandLieux}</div>
 <div className="item-user" style={{textAlign:"center"}}>{props.somme}</div>
{/*<div className="item-user edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/Livraison/${props._id}`}>Edite</Link> </div>*/}
 
<div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link onClick={handelDelete} to={`/livraison`}>Supprimer</Link> </div>

    </div>)
}
export default LivraisonList;
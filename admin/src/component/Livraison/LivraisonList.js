import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrash,FaEye} from "react-icons/fa";
const LivraisonList=(props)=>{
const {handelDelete,cart,_id}=props;
const[showAchat,setShowAchat]=useState(false);


const handelshow=()=>{

    setShowAchat(!showAchat)
}
console.log("the cartis passed succesfully",cart)
    
return(
<div className="user_info">
<div className="item-user">{props.username}</div>      
  <div className="item-user">{props.phone}</div>
  <div className="item-user"></div>
<div className="item-user">{props.commandDate}</div>
 <div className="item-user">{props.commandLieux}</div>
 <div className="item-user">{props.somme}</div>
<div className="item-user edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/Cliqué-et-retiré/${props._id}`}>Edite</Link> </div>
 
<div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link to={`/Cliqué-et-retiré/${props._id}`}>Supprimer</Link> </div>

    </div>)
}
export default LivraisonList;
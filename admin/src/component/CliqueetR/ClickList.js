import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './clique.css';
import AchatList from './AchatList';
import {FaPen,FaTrash,FaEye} from "react-icons/fa";
const ClickList=(props)=>{
const {handelDelete,cart,_id,user}=props;
const[showAchat,setShowAchat]=useState(false);


const handelshow=()=>{

    setShowAchat(!showAchat)
}
//console.log("thecartis passed succesfully",cart)
    
return(
<div className="user_info">
<div className="item-user">{props.username}</div>      
  <div className="item-user">+213{props.phone}</div>

 <div className="item-user" style={{textAlign:"center"}}><FaEye className="achat-list-icon"
onClick={handelshow}/>
{showAchat &&(
<AchatList product={props.product} 
cart={cart} user={user} showhendel={handelshow}/>)}
</div>
 <div className="item-user" style={{textAlign:"center"}}>{props.commandDate}</div>
 <div className="item-user" style={{textAlign:"center"}}>{props.commandheur}</div>
 <div className="item-user" style={{textAlign:"center"}}>{props.somme}</div>
{/*<div className="item-user edite-btn-u"
 onClick={props.show}>
<FaPen className="icon-edit-u"/>
<Link to={`/Cliqué-et-retiré/${props._id}`}>Edite</Link>
</div>*/}
 <div className="item-user edite-btn"
  onClick={handelDelete}><FaTrash className="icon-edit"/>
  <Link to={`/Cliqué-et-retiré/${props._id}`}>Supprimer</Link> </div>

    </div>)
}
export default ClickList;
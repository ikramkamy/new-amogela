import React from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrash} from "react-icons/fa";
const GoutList=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_info">


  <div className="item-user">{props.name}</div>      
  <div className="item-user">{props.disponible}</div>
  
  
  <div className="item-user edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/gouts/${props._id}`}>Modifier</Link> </div>
  <div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link to='/gouts'>Supprimer</Link> </div>
    </div>)
}
export default GoutList;
import React from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrash} from "react-icons/fa";
const Destination2List=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_info">

  <div className="item-user">{props.wilaya}</div>  
  <div className="item-user">{props.name}</div>      
  <div className="item-user"></div>  
  
  
  <div className="item-user edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/destination2/${props._id}`}>Modifier</Link> </div>
  <div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link to='/destination2'>Supprimer</Link> </div>
    </div>)
}
export default Destination2List;
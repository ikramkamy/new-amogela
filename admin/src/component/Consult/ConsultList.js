import React from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrash} from "react-icons/fa";
const ConsultList=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_info">
 <div className="item-user">{props.name}</div>      
  <div className="item-user">+213{props.phone}</div>
  <div className="item-user text-center">{props.email}</div>
  <div className="item-user text-center">{props.text}</div>
  <div className="item-user edite-btn-u" onClick={props.show}></div>
  <div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link to='/commandeProfessionnelles'>Supprimer</Link> </div>
    </div>)
}
export default ConsultList;
import React from 'react';
import { Link } from 'react-router-dom';
import './utilisateurs.css';
import {FaPen,FaTrash} from "react-icons/fa";
const UserList=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_info">
<div className="item-user">{props.username}</div>      
  <div className="item-user">{props.phone}</div>
 <div className="item-user">{props.email}</div>
<div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link to="/users">Supprimer</Link> </div>
    </div>)
}
export default UserList;
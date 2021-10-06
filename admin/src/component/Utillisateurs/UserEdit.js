import React from 'react';
import { Link } from 'react-router-dom';
import './utilisateurs.css';
import {FaPen} from "react-icons/fa";
const UserList=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_edit">

   
  <div className="item-user">{props.username}</div>      
  <div className="item-user">{props.phone}</div>
  
  <div className="item-user">{props.email}</div>

  <div className="item-user edite-btn"><FaPen className="icon-edit" onClick={handelDelete}/> Edit </div>
   
    </div>)
}
export default UserList;
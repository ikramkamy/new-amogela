import React from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrash} from "react-icons/fa";

const PhotoList=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_info">

<div className="item-user">{props._id}</div>
  <div className="item-user">{props.name}</div>      
  <div className="item-user">{props.img}</div>
 
  <div className="item-user"><img  style={{height:"50px",width:"50px"}}/></div>
  <div className="item-user"></div>
  <div className="item-user edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/photos/${props._id}`}>Edite</Link> </div>
  <div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link to='/photos'>Supprimer</Link> </div>
    </div>)
}
export default PhotoList;
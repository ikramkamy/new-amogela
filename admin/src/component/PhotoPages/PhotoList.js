import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrash} from "react-icons/fa";
import './photo.css';
const PhotoList=(props)=>{
const {handelDelete,name,page,showhendel2}=props;
const [info,setInfo]=useState({
  url:"http://localhost:3001/uploads",
});
useEffect(()=>{
  setInfo({
    url:"http://localhost:3001/uploads/"+name
  })
},[])

return(
<div className="user_info">
<div className="item-user">{page}</div>      

 <div className="item-user photo-item" style={{backgroundImage:`url("http://localhost:3001/uploads/${name}")`}}></div>
 <div className="item-user"></div>
 <div className="item-user edite-btn-u" onClick={showhendel2} ><FaPen className="icon-edit-u"/><Link to={`/photos/${props._id}`}>Modifier</Link> </div>
 <div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit"/><Link to={`/photos/${props._id}`}>Supprimer</Link> </div>
    </div>)
}
export default PhotoList;
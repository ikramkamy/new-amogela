import React from 'react';
import { Link } from 'react-router-dom';
import './barquette.css';
import {FaPen,FaTrash} from "react-icons/fa";
const BarquetteList=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_info">

   
      
  <div className="tab-item">{props.name}</div>
  <div className="itab-item">{props.prix}</div>
  <div className="tab-item">{props.disponible}</div>
  <div className="tab-item edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/barquettes/${props._id}`}>Modifier</Link> </div>
  <div className="tab-item edite-btn" onClick={handelDelete}><FaTrash className="icon-edit" onClick={handelDelete}/><Link to={`/barquettes/${props._id}`} onClick={handelDelete}>Supprimer </Link></div>
    </div>)
}
export default BarquetteList;
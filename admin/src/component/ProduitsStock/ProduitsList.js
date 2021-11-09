import React from 'react';
import { Link } from 'react-router-dom';
import './produits.css';
import {FaPen,FaTrash} from "react-icons/fa";
const ProduitsList=(props)=>{
const {handelDelete}=props;


    
return(
 
<div className="user_info ">

  <div className="tab-item">{props.name}</div>
  <div className="tab-item">{props.cathegorie}</div>
  <div className="tab-item">{props.prix}</div>
 <div className="tab-item">{props.disponible}</div>

  <div className="tab-item edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/produits/${props._id}`}>Edite</Link> </div>
  <div className="tab-item edite-btn" ><FaTrash className="icon-edit"/><Link to={`/produits/${props._id}`} onClick={handelDelete}>Supprimer </Link></div>
    </div>
    )
}
export default ProduitsList;
import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";
import { Link } from 'react-router-dom';

const Produit=(props)=>{
 

return(<div className="produit-component" id={props.prodID}>

<div className="">

<img src={props.purl} style={{width:"300px",height:"300px"}}></img></div>
<div className="content-wrapper">
       <div className="info-product">
          <div> {props.pname}</div>
          {props.pprice}
          
       </div>
    <div className="button-wrapper">
         <button     variant="contained" color="secondary">
        <Link to={`/getproduitbyID/:${props.prodID}`}>{props.pprice} - Ajouter</Link> 
         </button>
    </div>
  </div>  


    </div>)
}

export default Produit;

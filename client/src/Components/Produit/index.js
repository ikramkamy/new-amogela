import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";


const Produit=(props)=>{

const {addproduct}=props;

    return(<div className="produit-component">

<div className="card-header">
  
  <img style={{width:"10em"} }src={props.purl}></img></div>
    <div className="content-wrapper">
           <div className="info-product">
              <div> {props.pname}</div>
              <div> {props.pprice} </div>
           </div>
        <div className="button-wrapper">
             <button  onClick = {addproduct}   variant="contained" color="secondary">
            Ajouter
             </button>
        </div>
      </div>  


    </div>)
}

export default Produit;

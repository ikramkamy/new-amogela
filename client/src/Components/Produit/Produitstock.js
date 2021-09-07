import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";


const Produitstock=(props)=>{

const {addproduct,prodID}=props;

    return(<div className="produit-component" id={props.prodID}>

<div className="">
  
  <img src={props.purl} style={{width:"300px",height:"300px"}}></img></div>
    <div className="content-wrapper">
           <div className="info-product">
              <div> {props.pname}</div>
              {props.pprice}
           </div>
        <div className="button-wrapper">
             <button  onClick = {addproduct}   variant="contained" color="secondary">
             {props.pprice} - Ajouter
             </button>
        </div>
      </div>  


    </div>)
}

export default Produitstock;

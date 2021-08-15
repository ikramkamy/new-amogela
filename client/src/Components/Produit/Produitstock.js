import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";


const Produitstock=(props)=>{

const {addproduct,prodID}=props;

    return(<div className="produit-component" id={props.prodID}>

<div className="">
  
  <img style={{width:"5em"} }src={props.purl}></img></div>
    <div className="content-wrapper">
           <div className="info-product">
              <div> {props.pname}</div>
              
           </div>
        <div className="button-wrapper">
             <button  onClick = {addproduct}   variant="contained" color="secondary">
             {props.pprice}-Ajouter
             </button>
        </div>
      </div>  


    </div>)
}

export default Produitstock;

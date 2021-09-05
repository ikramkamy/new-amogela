import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";


const Produit=(props)=>{

const {prodID,getprodbyID,addproduct}=props;

    return(<div className="produit-component" >
<div>
<div className="">
  
  <img src={props.purl}></img></div>
<div className="content-wrapper">
           <div className="info-product">
              <div> {props.pname}</div>
             
           </div>
        <div className="button-wrapper">
             <button  onClick={getprodbyID}  variant="contained" color="secondary">
            <a href={`/getproduitbyID/:${props.prodID}`} > {props.pprice}-Ajouter</a>
             </button>
        </div>
      </div>  
      </div>

    </div>)
}

export default Produit;

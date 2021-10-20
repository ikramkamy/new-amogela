import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const ProduitPro=(props)=>{
const history=useHistory;
const {addproduct,prodID}=props;

    return(<div className="produit-component" id={props.prodID}>

<div className="">
  
  <img src={props.purl} style={{width:"300px",height:"300px"}}></img></div>
    <div className="content-wrapper">
           <div className="info-product">
              <div> {props.name}</div>
             <div className="price-prod" >Prix: {props.prix}</div> 
           </div>
        <div className="button-wrapper-pro ">
             <button style={{fontSize:"1.85em"}} variant="contained" color="secondary">
            <Link to="/Consulting">Plus d'information</Link> 
             </button>
        </div>
      </div>  


    </div>)
}

export default ProduitPro;

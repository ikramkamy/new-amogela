import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";


const Produitstock=(props)=>{

const {addproduct,prodID}=props;

    return(<div className="produit-component" id={props.prodID}>

<div className="">

{props.dis &&(<div className="disponible-label-2"> {props.disponible}</div>)}
    {!props.dis &&(<div className="disponible-label"> {props.disponible}</div>)}
  {/*<img src={props.purl} style={{width:"300px",height:"300px"}}></img>*/}</div>
  <div className="dynamic-produit-image"  
  style={{backgroundImage:`url("http://localhost:3001/uploads/${props.img.split('uploads\\')[1]}")`}}></div>
    <div className="content-wrapper">
           <div className="info-product">
              <div> {props.pname}</div>
            
             <div className="price-prod" >Prix: {props.pprice}</div> 
           </div>
        <div className="button-wrapper">
             <button disabled={props.bl}   style={{fontSize:"1.85em"}} 
             onClick = {addproduct}   variant="contained" color="secondary">
             Ajouter
             </button>
        </div>
      </div>  


    </div>)
}

export default Produitstock;

import React,{useState,useEffect} from 'react';
import './facture.css';


const Facture=(props)=>{
const{names}=props;

return (
<div >
   <ul>
<li>{names}</li>)</ul>
             
              <div className="principal-item">Prix</div>
               <div className="principal-item">Gout</div>
               
               <div className="principal-item">Prix Totale</div>
     



        </div>)
        
    
    } 
    export default Facture;
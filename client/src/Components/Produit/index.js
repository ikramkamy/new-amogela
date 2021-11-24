import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Produit=(props)=>{
   const [prodbyID,setProdbyID]=useState();
   const [products,setProducts]=useState([]);
   const [show,setShow]=useState(true);
   const [id, setId]=useState();
     /*
   const getthis=()=>{
      console.log("we are getting thinsss",props.prodID)
      setId(props.prodID)
   
      axios.get("/getproduitByID/6112eae87406252de8f9e039").then(res => {
         var data=res.data.data;
         setProducts (data);
         console.log("we are getting product bu fucking idd",products);
         
       })
       .catch(function (error) {
           console.log(error);
       })
      }
      disponible-label
   */
 

return(<div className="produit-component" id={props.prodID}>
<div className="">
   {props.dis &&(<div className="disponible-label-2"> {props.disponible}</div>)}
    {!props.dis &&(<div className="disponible-label"> {props.disponible}</div>)}

{/*<img src={props.purl} style={{width:"300px",height:"300px"}}></img>*/}</div>
<div className="dynamic-produit-image"  style={{backgroundImage:`url("http://localhost:3001/uploads/${props.img.split('uploads\\')[1]}")`}}></div>
<div className="content-wrapper">
       <div className="info-product">
          <div> {props.pname}</div>
         <div  className="price-prod" >Prix: {props.pprice}</div> 
          {props.getbyID}
       </div>
    <div className="button-wrapper">
         <button     variant="contained" color="secondary" className="ajoute">
        <Link to={`/ID/:${props.prodID}`}>Ajouter</Link> 
         </button>
    </div>
  </div> 

  

    </div>)
}

export default Produit;

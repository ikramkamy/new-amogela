import React,{useState} from "react";
import "./filter.css";
import axios from 'axios';
const Filter = (props) => {
//const {get,}=props;
  return (
    <div className="filter">
        <div className="shop-title">
            <div className="line"></div>
           <div id="shop"><a href="/shop">SHOP</a></div> 
            <div className="line"></div>
            </div>
        
      <div className="filter-items">
       <div className="filter-item" ><a href="/shop-barquette">Barquettes de glaces</a></div>
       <div className="filter-item"><a onClick={()=>{}} href="/escimau-biscuit">Escimaux & Biscuits</a></div>
       <div className="filter-item"><a>glaces</a></div>
       <div className="filter-item"><a href="chocolat-confiserie">Chocolat&Confiserie</a></div>


      </div>
    </div>
  );
};
export default Filter;

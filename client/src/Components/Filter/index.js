import React,{useState,useEffect} from "react";
import "./filter.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaIceCream } from "react-icons/fa";
import { toNamespacedPath } from "path";
const Filter = (props) => {
  const [toggleMenu,setToggleMenu]=useState(false);
  const [larger,setLarger]=useState(window.innerWidth);
const togglesmallscreen=()=>{
   setToggleMenu(!toggleMenu);

}
useEffect(()=>{

const changeWidth=()=>{
   setLarger(window.innerWidth);
   if(window.innerWidth >950){
       setToggleMenu(false) ;
   }
}
window.addEventListener('resize', changeWidth);
return()=>{
window.removeEventListener('resize',changeWidth);
}


},[])
//const {get,}=props;
  return (
    <div className="filter">
        <div className="shop-title">
            <div className="line"></div>
           <div id="shop"><Link to="/shop">SHOP</Link></div> 
            <div className="line"></div>
            </div>
        
      <div className="filter-items">
       <div className="filter-item" ><Link to="/shop-barquette">Barquettes de glaces</Link></div>
       <div className="filter-item"><Link onClick={()=>{}} to="/escimau-biscuit">esquimaux et biscuits</Link></div>
       <div className="filter-item"><Link to="/entremets-glace">Entremet et glaces</Link></div>
       <div className="filter-item"><Link to="/chocolat-confiserie">Chocolat et Confiserie</Link></div>


      </div>
      
      <div className="burgerMenu-filer">
                  <FaIceCream onClick={togglesmallscreen} />

                </div>

                {toggleMenu && (
                <div className="filter-items-small">
       <div className="filter-item" ><Link to="/shop-barquette">Barquettes de glaces</Link></div>
       <div className="filter-item"><Link onClick={()=>{}} to="/escimau-biscuit">Escimaux & Biscuits</Link></div>
       <div className="filter-item"><Link to="/entremets-glace">Entremet et glaces</Link></div>
       <div className="filter-item"><Link to="/chocolat-confiserie">Chocolat&Confiserie</Link></div>
       </div>
       )
}
      



    </div>
  );
};
export default Filter;

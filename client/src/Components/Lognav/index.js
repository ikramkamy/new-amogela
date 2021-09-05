import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaIceCream } from "react-icons/fa";

const Lognav = (props) => {
const {issignin}=props;
console.log("issignin",issignin);
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
const logout=()=>{
    alert("you are loged out")
    localStorage.clear();
    window.location.href = '/';
}
//const {get,}=props;
  return (
    <div className="filter">
        <div className="filter-items">
       <div className="filter-item" ><Link to="/signin" onClick={logout}>Logout</Link></div>
       <div className="filter-item" ><Link to="/signin" onClick={logout}>login</Link></div>
      </div>
      <div className="burgerMenu-filer">
                  <FaIceCream onClick={togglesmallscreen} />
 </div>

                {toggleMenu && (
                <div className="filter-items-small">
       <div className="filter-item" ><Link to="/signin">login</Link></div>
   
       
       </div>
       )
}
      



    </div>
  );
};
export default Lognav;

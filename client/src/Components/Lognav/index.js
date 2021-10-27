import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaIceCream, FaLock } from "react-icons/fa";
import {FaPersonBooth} from "react-icons/fa";
import { useHistory } from "react-router";
import './logout.css';
const Lognav = (props) => {
const {issignin}=props;
const history=useHistory();
console.log("issignin",issignin);
const [toggleMenu,setToggleMenu]=useState(false);
const [larger,setLarger]=useState(window.innerWidth);
const togglesmallscreen=()=>{
   setToggleMenu(!toggleMenu);

}
/*
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
*/
const logout=()=>{
    alert("you are loged out")
    localStorage.clear();
    
}

  return (
    <div className="wrap-lo-out">
        <div className="log-out-item">
      
         
         <Link to="/signin" onClick={logout}>Logout <FaLock/></Link></div>
       
     
      
      



    </div>
  );
};
export default Lognav;

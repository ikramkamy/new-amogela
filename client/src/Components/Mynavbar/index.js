import React,{ useState, useEffect } from 'react'
import './Nav.css'
import CompressLogo from '../../images/logo compress menu.png';
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
 export default function Mynavbar(props) {
   const [toggleMenu,setToggleMenu]=useState(false);
   const [larger,setLarger]=useState(window.innerWidth);
   const [isVisible, setIsVisible] = useState(false);
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

const listenToScroll = () => {
  let heightToHideFrom = 180;
  const winScroll = document.body.scrollTop || 
      document.documentElement.scrollTop;
     
  if (winScroll > heightToHideFrom) { 
                
       setIsVisible(true);
  } else {
       setIsVisible(false)
  }  
};

useEffect(() => {   
  window.addEventListener("scroll", listenToScroll);
  return () => 
     window.removeEventListener("scroll", listenToScroll); 
}, [])


    return (
        <div className="Nav">
     
        
            <div className="menu">

               
                 <div className="menuLarge">

                   


                {isVisible &&( <img src="/images/logos.jpg" className="side-logo" /> )
                
                }
                    <Link to="/">Accueil</Link> 
                    <Link to="/histoire"> Histoire</Link> 
                     <Link to="/Glacesetsorbets">Glaces et sorbets</Link>  
                   <Link to="/Chocolat">Chocolat </Link> 
                    <Link to="/shop">Shop</Link>  
                     <Link to="Consulting">Consulting</Link> 
                   <Link to="/signin">Connexion</Link>   
                    </div>
{/*<div className="compressedLogo"> <img src={CompressLogo}/>  </div>*/}
<div className="burgerMenu">
                  <FaBars onClick={togglesmallscreen} />

                </div>

            </div>
{toggleMenu && (
  <div className="fadeclass">
  <div className="menuSmallScreen">
      
                    <Link to="/">Accueil</Link> 
                    <Link to="/histoire"> Histoire</Link>
                     <Link to="/Glacesetsorbets">Glaces et sorbets</Link> 
                   <Link to="/Chocolat " >Chocolat </Link>
                    <Link to="/shop">Shop</Link>  
                   <Link to="Consulting">Consulting</Link> 
                   <Link to="/signin">Contact</Link> 
                 
      <button className="closeButton" ></button>


  </div>
</div>

)}

          

         
        </div>


    )
}

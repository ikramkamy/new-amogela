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
  let heightToHideFrom = 10;
  const winScroll = document.body.scrollTop || 
      document.documentElement.scrollTop;
     
  if (winScroll > heightToHideFrom) { 
                
       setIsVisible(true);
  } else {
       setIsVisible(false);
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

               
                 <ul className="menuLarge">

                   


                {isVisible &&( <Link to="/"><img src="/images/logoamo.png" className="product-logo" /></Link> )
                
                }
                   <li> <Link to="/">Accueil</Link> </li>
                   <li> <Link to="/histoire"> Histoire</Link></li> 
                   <li>  <Link to="/Glacesetsorbets">Glaces et sorbets</Link>  </li>
                   <li><Link to="/Chocolat">Chocolat </Link></li> 
                   <li> <Link to="/shop">Shop</Link> </li> 
                   <li>  <Link to="Consulting">Consulting</Link> </li>
                  <li> <Link to="/signin">Connexion</Link> </li>  
                    </ul>
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

import React,{ useState, useEffect } from 'react'
import './Nav.css'
import CompressLogo from '../../images/logo compress menu.png';
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
 export default function Mynavbar(props) {
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
const [scroll,setScroll]=useState(false);
useEffect(() => {
  window.onscroll = () => {
while(window.pageYOffset >70){

  setScroll(true)
}
    

    console.log("window.pageYOffset",window.pageYOffset);
    console.log("scroll",scroll);
    
  }
}, []);

    return (
        <div className="Nav">
     
        
            <div className="menu">

               
                 <ul className="menuLarge">

                   {scroll &&( <img src="/images/logoamo.png" className="product-logo" />)


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

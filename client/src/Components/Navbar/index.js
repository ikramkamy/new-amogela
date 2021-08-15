import React from 'react'
import './Nav.css'
import Logo from '../../images/logo.png'
import { Fade } from 'react-animation-components'
import { FadeTransform } from 'react-animation-components'
import { useState, useEffect } from 'react'
import CompressLogo from '../../images/logo compress menu.png'
 const Navbar=(props)=> {
    const [fade, setFade] = useState(false);
 
    window.addEventListener('scroll', () => {
        let l = document.querySelector('.logo');
        let k = document.querySelector('.Nav');
        let c = document.querySelector('.menuSmallScreen');
        let top = window.scrollY;
        if ( 20 < top) {
         
          l.style.display = "none";
          k.style.height = "auto";
         
        }
      
       else {
        l.style.display = "block";
        k.style.height = "310px";
    
       }
      })
    

      const clickOpenburgerMenu = () => {
        setFade(!fade)
        let k = document.querySelector('.Nav');
        k.style.height= "100vh";
      }




      const clickCloseBurgerMenu = () => {
        setFade(false)
        let k = document.querySelector('.Nav');
        k.style.height= "auto";
      }

    return (
        <div className="Nav">
     
            <div className="logo">
                <img src={Logo} />
            </div>


            <div className="menu" >

                <div className="menuLarge">
                    <div> Accueil </div>
                    <div> Histoire</div>
                    <div> Glaces et sorbets </div>
                    <div> Chocolat </div>
                    <div> Shop </div>
                    <div> Consulting </div>
                    <div> Contact </div>
<div className="compressedLogo"> <img src={CompressLogo}/>  </div>
                </div>

                <div className="burgerMenu">
                    {<button onClick={() => clickOpenburgerMenu() }> { (!fade) && <i class="fas fa-ice-cream"></i> }</button>}

                </div>

            </div>


            <Fade in={fade}
                className="fadeclass" style={fade && {zIndex : 6}}>
                <div className="menuSmallScreen">
                    <div> Accueil </div>
                    <div> Histoire</div>
                    <div> Glaces et sorbets </div>
                    <div> Chocolat </div>
                    <div> Shop </div>
                    <div> Consulting </div>
                    <div> Contact </div>

                    <button className="closeButton" onClick={() => clickCloseBurgerMenu( )}> X </button>


                </div>
            </Fade>

         
        </div>


    )
}
export default Navbar;
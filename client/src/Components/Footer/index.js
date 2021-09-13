import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

//import Smalllogo from '../images/LOGO_Plan de travail 1 (2).jpg'

export default function Footer() {
    return (
      
                 <div className="FooterContact">
                <div className="footerContainer">

                    <div className="logoFooter">
                        <div className="logoBox">
                            <img src="/images/logos.jpg" />
                        </div>
                    </div>



                    <div className="infoContent">
                        <div className="box">
                            <div className="boxContent">
                                <h5> Amogela</h5>
                                <div className="address"> 115 Avenue Colonel Lotfi Bab El Oued </div>
                               
                                <div className="opening">
                                    <h5> Heures/jours d'ouverture</h5>
                                    <div> Samedi-Jeudi <section>  8H-30 - 22H  </section></div>

                                </div>
                            </div>
                        </div>
                        <div className="box">

                            <div className="boxContent">
                                <div className="menuFooter"><Link to="/">Accueil</Link> </div>
                                <div className="menuFooter"> <Link to="/histoire">Histoire</Link></div>
                                <div className="menuFooter"> <Link to="/Glacesetsorbets">Glaces et sorbets</Link> </div>
                                <div className="menuFooter"> <Link to="/Chocolat ">Chocolat</Link> </div>
                                <div className="menuFooter"> <Link to="/shop">Shop</Link> </div>
                                <div className="menuFooter"> <Link to="Consulting">Consulting </Link></div>
                                <div className="menuFooter"> <Link to="/signin">Contact</Link> </div>
                            </div>

                        </div>
                        <div className="box">
                            <div className="boxContent">
                                <div className="newsletter">
                                    <h5> NEWSLETTER</h5>
                                    <input type="text"  placeholder="Entrez email" /> 
                                    <div> <button> <b>Envoyer</b> </button></div>
                                </div>

                                <div className="socialMedia">
                                    <div> <i class="fab fa-instagram" style={{cursor:"pointer"}}></i></div>
                                    <div> <i class="fab fa-facebook-f" style={{cursor:"pointer"}}></i></div>


                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
       
    )
}
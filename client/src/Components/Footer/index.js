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
                            <div className="opening">
                                    <h5> Heures/jours d'ouverture</h5>
                                    <div> Samedi-Jeudi <section>  8H-30 - 22H  </section></div>

                                </div>
                                <div className="address">
                                    <div style={{marginTop:"10px"}}></div>
                                Amogela Adresse 
                                <div style={{marginTop:"10px"}}></div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102527.69240155486!2d3.1043758471477276!3d36.57844946346099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e558a34858019%3A0x3800bb0fe7e27865!2sLarbaa!5e0!3m2!1sen!2sdz!4v1618138945332!5m2!1sen!2sdz" className="map-size" />
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
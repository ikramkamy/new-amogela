import React from 'react'
import './footer.css';

//import Smalllogo from '../images/LOGO_Plan de travail 1 (2).jpg'

export default function Footer() {
    return (
      
                 <div className="FooterContact">
                <div className="footerContainer">

                    <div className="logoFooter">
                        <div className="logoBox">
                            <img src="/images/logoamo.png" />
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
                                <div className="menuFooter"> Accueil</div>
                                <div className="menuFooter"> Histoire</div>
                                <div className="menuFooter"> Glaces et sorbets </div>
                                <div className="menuFooter"> Chocolat </div>
                                <div className="menuFooter"> Shop </div>
                                <div className="menuFooter"> Consulting </div>
                                <div className="menuFooter"> Contact </div>
                            </div>

                        </div>
                        <div className="box">
                            <div className="boxContent">
                                <div className="newsletter">
                                    <h5> NEWSLETTER</h5>
                                    <div> <input type="text"  placeholder="Entrez email"/> </div>
                                    <div> <button> <b>  Envoyer</b> </button></div>
                                </div>

                                <div className="socialMedia">
                                    <div> <i class="fab fa-instagram"></i></div>
                                    <div> <i class="fab fa-facebook-f"></i></div>


                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
       
    )
}
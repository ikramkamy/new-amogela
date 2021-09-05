import React from 'react';
import './histoire.css';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Footer from '../Footer';
const Histoire =()=>{

    return(<div className="histoire">
 <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logoamo.png" className="product-logo" />
        </Link>
        </div>
<Mynavbar/>
<div className="histoire-wrapper">
<div className="Pagename"> Histoire</div>
<div className="sorbets-ceontent">
<div className="text-histoire-wrapper">
<div className="text-histoire">Amogela est le résultat d'une réconversion professionnele opérée à partir de 2014,aprés plusieurs parcours dans divers industrie.</div> 
</div>
<img src="/images/histo1.jpg"/>
</div>
<div className="sorbets-ceontent">
<img src="/images/histo2.jpg"/>
<div className="text-histoire-wrapper">
<div className="text-histoire"><span>Toufik Khelef,</span> ingénieur de formation a eu l'idée d'entreprendre dans le domaine de la glace artisanale suite à un séjour effectué en Italie entre 2011 et 2013 à Cuneo dans le région de Piemount</div> 
</div>
</div>
<div className="sorbets-ceontent">
<div className="text-histoire-wrapper">
<div className="text-histoire">A partie de ce moment il a décider d'abondonner l'industrie pour l'artisanat et entreprend plusieurs formation en Italie dans le domaine du Gelato, et finie par créer <span>Amogela</span></div> 
</div>
<img src="/images/histo3.png"/>
</div>
</div>
<Footer/>
    </div>)
}
export default Histoire;
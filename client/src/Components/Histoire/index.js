import React,{useEffect} from 'react';
import './histoire.css';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Footer from '../Footer';
const Histoire =()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(<div className="histoire">
 <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logo.png" className="product-logo" />
        </Link>
        </div>
<Mynavbar/>
<div className="histoire-wrapper">
<div className="Pagename"> Histoire</div>
<div className="histoirs-ceontent">
<div className="text-histoire-wrapper">
<div className="text-histoire displayFlex">Amogela est le résultat d'une réconversion professionnelle opérée à partir de 2014,aprés plusieurs parcours dans diveres industries.</div> 
</div>
<img src="/images/histo1.jpg" className="histo-img-size"/>
<div className="text-histoire displayNone">Amogela est le résultat d'une réconversion professionnelle opérée à partir de 2014,aprés plusieurs parcours dans diveres industries.</div> 
</div>
<div className="histoirs-ceontent">
<img src="/images/histo3.jpg" className="histo-img-size"/>
<div className="text-histoire-wrapper">
<div className="text-histoire"><span>Toufik Khelef,</span> ingénieur de formation a eu l'idée d'entreprendre dans le domaine de la glace artisanale suite à un séjour effectué en Italie entre 2011 et 2013 à Cuneo dans le région de Piemont</div> 
</div>
</div>
<div className="histoirs-ceontent">
<div className="text-histoire-wrapper">
<div className="text-histoire">A partir de ce moment il  décide d'abandonner l'industrie pour l'artisanat et entreprend plusieurs formations en Italie dans le domaine du Gelato, et fini par créer Amogela.</div> 
</div>
<img src="/images/histo2.jpg" className="histo-img-size"/>
</div>
</div>
<div className="choco-btn-wrapper"><button className="choco-btn nohover"><Link to="/Consulting">Consulting </Link></button></div>
<Footer/>
    </div>)
}
export default Histoire;
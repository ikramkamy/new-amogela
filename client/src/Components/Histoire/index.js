import React,{useEffect,useState} from 'react';
import './histoire.css';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Footer from '../Footer';
import axios from 'axios';
const Histoire =()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const [photos,setPhotos]=useState([]);
      useEffect(() => {
        const expensesListResp = async () => {
          await axios.get(`/photos-pages`)
          .then(response =>setPhotos(response.data))
       }
        expensesListResp();
      },[]);
      


    return(<div className="histoire">
 <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logos.jpg" className="product-logo" />
        </Link>
        </div>
<Mynavbar/>
<div className="histoire-wrapper">
<div className="Pagename"> Histoire</div>
<div className="histoirs-ceontent">
<div className="text-histoire-wrapper">
<div className="text-histoire displayFlex">Amogela est le résultat d'une réconversion professionnelle opérée à partir de 2014,aprés plusieurs parcours dans diveres industries.</div> 
</div>
{/*<img src="/images/histof.jpg" className="histo-img-size"/>*/}
<div className="dynamic-histoire"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[3]?.name}")`}}></div>
<div className="text-histoire displayNone">Amogela est le résultat d'une réconversion professionnelle opérée à partir de 2014,aprés plusieurs parcours dans diveres industries.</div> 
</div>
<div className="histoirs-ceontent">
{/*<img src="/images/histo3.jpg" className="histo-img-size"/>*/}
<div className="dynamic-histoire"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[4]?.name}")`}}></div>
<div className="text-histoire-wrapper">
<div className="text-histoire"><span>Toufik Khelef,</span> ingénieur de formation a eu l'idée d'entreprendre dans le domaine de la glace artisanale suite à un séjour effectué en Italie entre 2011 et 2013 à Cuneo dans le région de Piemont</div> 
</div>
</div>
<div className="histoirs-ceontent">
<div className="text-histoire-wrapper">
<div className="text-histoire">A partir de ce moment il  décide d'abandonner l'industrie pour l'artisanat et entreprend plusieurs formations en Italie dans le domaine du Gelato, et fini par créer Amogela.</div> 
</div>
{/*<img src="/images/histos.jpg" className="histo-img-size"/>*/}
<div className="dynamic-histoire"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[5]?.name}")`}}></div>
</div>
</div>
<div className="choco-btn-wrapper"><button className="choco-btn nohover"><Link to="/Consulting">Consulting </Link></button></div>
<Footer/>
    </div>)
}
export default Histoire;
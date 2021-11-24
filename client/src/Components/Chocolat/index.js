import React,{useEffect,useState} from 'react';
import Footer from '../Footer';
import './chocolat.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Mynavbar from '../Mynavbar';
import axios from 'axios';
const Chocolat=()=>{
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
      
    return(<div >
        <div className="nav-shop" style={{zIndex:"10"}}>
          <Link to="/" className="image-wrapper">
          <img src="/images/logos.jpg" className="product-logo"/>
         
          </Link>
        </div>
        <Mynavbar/>
        <div className="Pagename">Chocolat</div>
 <Carousel className="slide">
                <Carousel.Item className="carousselItem">
                  {/*  <img src="images/chocolat1.jpg" style={{width:"100%",height:"600px"}}/>*/}
                    <div className="dynamic-home"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[11]?.name}")`}}></div>
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                  {/*<img src="images/chocolat2.jpg" style={{width:"100%",height:"600px"}} />*/}
                    <div className="dynamic-home"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[12]?.name}")`}}></div>
                </Carousel.Item>


                <Carousel.Item className="carousselItem">
                    {/*<img src="images/chocolat3.jpg" style={{width:"100%",height:"600px"}}/>*/}
                    <div className="dynamic-home"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[13]?.name}")`}}></div>
                </Carousel.Item>
            </Carousel>
<div className="text-choco-wrap">
    <p className="text-chocolat">
<h1>Pourquoi le chocolat?</h1><br/>
La réponse se trouve certainement dans les pages d'un livre <span>"Gelatrea Per tutte le stagioni" </span>de <span>"Paolo Brundlii"</span>; 
un chef glacier chocolatier que j'ai eu a rencontrer plusieurs fois pendant le salon de la glace artisanale à
Rimini en Italie.
qui selon lui l'activité de glacerie et de chocolaterie sont trés complémentaires et deverons se cotoyer dans
un méme magazin; Et c'est à partie de cette reflexion que nous avons commencé à proposer du chocolat depuis l'hiver 2018. 
</p>



</div>
<div className="choco-btn-wrapper"><div className="choco-btn nohover"><Link to="/shop">Shop </Link></div></div>
<Footer/>
    </div>)
}
export default Chocolat;
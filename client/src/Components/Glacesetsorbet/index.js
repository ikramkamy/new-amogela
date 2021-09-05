import React from 'react';
import './glaces.css';
import '../Product/product.css';
import Carousel from 'react-bootstrap/Carousel';
import Slideimg from '../../images/B.jpg';
import Slideimg1 from '../../images/C.jpg';
import Slideimg2 from '../../images/D.jpg';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Footer from  "../Footer";
const Glaces=()=>{


return(<div className="glaces">
    <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logoamo.png" className="product-logo" />
        </Link>
        </div>
    <Mynavbar/>

    <div className="Pagename"> Glaces & Sorbets</div>
  <Carousel className="slide">
                <Carousel.Item className="carousselItem">
                    <img src={Slideimg1} />
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                    <img src={Slideimg2} />
                </Carousel.Item>


                <Carousel.Item className="carousselItem">
                    <img src={Slideimg} />
                </Carousel.Item>
            </Carousel>
<div>
    
    <div className="principal-desc">
    Nos glaces et sorbets se distinguent par leurs gouts et leurs saveurs fraiches, Pour y arriver nous avons le choix de les réaliser avec des ingrédients naturels, Privés de colorants et d'aromes de synthése,
    </div>
     <div className="sorbets-ceontent">

 <div className="text-sorbets">La liste des ingrédients qui compose nos recettes et la plus breve pioufle pour laisser la place à la vraie saveur des matiérs premiéres,</div> 
 <img src="/images/5.png"/>
 </div>
 <div className="sorbets-ceontent">
 <img src="/images/3.png"/>
 <div className="text-sorbets"> Le choix des parfums commence par les classiques comme l vanille, le chocolat en passant les
 Sorbets fraise, citron jusqu'à arrivé à des saveurs authentiques tel que le Gianduja ou la nougatine.
 </div> 
 


 </div>
 
 </div>
 <Footer/>
</div>)




}
export default Glaces;
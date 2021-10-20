import React from 'react';
import './glaces.css';
import '../Product/product.css';
import Carousel from 'react-bootstrap/Carousel';

import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Footer from  "../Footer";
const Glaces=()=>{


return(<div className="glaces">
    <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logos.jpg" className="product-logo" />
        </Link>
        </div>
    <Mynavbar/>

    <div className="Pagename"> Glaces & Sorbets</div>
  <Carousel className="slide">
                <Carousel.Item className="carousselItem">
                    <img src="/images/sorbet4.jpg" />
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                    <img src="/images/sorbet3.jpg" />
                </Carousel.Item>


                <Carousel.Item className="carousselItem">
                    <img src="/images/sorbet4.jpg" />
                </Carousel.Item>
  </Carousel>
<div className="glaces">
    
    <div className="principal-desc">
    Nos glaces et sorbets se distinguent par leurs gouts et leurs saveurs fraiches, Pour y arriver nous avons le choix de les réaliser avec des ingrédients naturels, Privés de colorants et d'aromes de synthése,
    </div>
     <div className="sorbets-ceontent" style={{marginBottom:"100px"}}>
     <div className="text-sorbet-wrapper">
     <div className="text-sorbets">La liste des ingrédients qui compose nos recettes et la plus breve possible pour laisser la place à la vraie saveur des matiérs premiéres,</div> 

     </div>
 
 <img src="/images/sorbet1.jpg" className="img-sorbet-size"  />
 </div>
 <div className="sorbets-ceontent">
 <img src="/images/sorbet2.jpg" className="img-sorbet-size" />
 <div className="text-sorbet-wrapper">
 <div className="text-sorbets"> Le choix des parfums commence par les classiques comme la vanille, le chocolat en passant par les
 Sorbets fraise, citron jusqu'à arrivé à des saveurs authentiques tel que le Gianduja ou la nougatine.
 </div>

 </div>
  
 


 </div>
 
 </div>
 <div className="choco-btn-wrapper"><button className="choco-btn nohover"><Link to="/shop">Shop </Link></button></div>
 <Footer/>
</div>)




}
export default Glaces;
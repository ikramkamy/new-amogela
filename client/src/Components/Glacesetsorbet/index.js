import React,{useState,useEffect} from 'react';
import './glaces.css';
import '../Product/product.css';
import Carousel from 'react-bootstrap/Carousel';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import Footer from  "../Footer";
import axios from 'axios';
const Glaces=()=>{

    const [photos,setPhotos]=useState([]);
    useEffect(() => {
      const expensesListResp = async () => {
        await axios.get(`/photos-pages`)
        .then(response =>setPhotos(response.data))
     }
      expensesListResp();
    },[]);
    

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
                  {/*<img src="/images/sorbet4.jpg" />*/}
                    <div className="dynamic-home"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[6]?.name}")`}}></div>
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                    {/*<img src="/images/sorbet3.jpg" />*/}
                    <div className="dynamic-home"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[7]?.name}")`}}></div>
                </Carousel.Item>


                <Carousel.Item className="carousselItem">
                    {/*<img src="/images/sorbet4.jpg"/>*/}
                    <div className="dynamic-home"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[8]?.name}")`}}></div>
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
 
{/* <img src="/images/sorbet1.jpg" className="img-sorbet-size"  />*/}
 <div className="dynamic-histoire"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[9]?.name}")`}}></div>
 </div>
 <div className="sorbets-ceontent">
 {/*<img src="/images/sorbet2.jpg" className="img-sorbet-size" />*/}
 <div className="dynamic-histoire"  style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[10]?.name}")`}}></div>
 <div className="text-sorbet-wrapper">
 <div className="text-sorbets"> Le choix des parfums commence par les classiques comme la vanille, le chocolat en passant par les
 Sorbets fraise, citron jusqu'à arrivé à des saveurs authentiques tel que le Gianduja ou la nougatine.
 </div>

 </div>
  
 


 </div>
 
 </div>
 <div className="choco-btn-wrapper"><div className="choco-btn nohover"><Link to="/shop">Shop </Link></div></div>
 <Footer/>
</div>)




}
export default Glaces;
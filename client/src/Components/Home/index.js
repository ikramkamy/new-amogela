import React,{useState,useEffect} from 'react'
import {FaHome, FaShoppingBag,FaBicycle, FaBaby, FaLocationArrow, FaBackspace, FaRecycle, FaArrowCircleLeft, FaMapMarked} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../../images/logo.png'
import './home.css'
import Picture from '../../images/A.jpg'
import Slideimg from '../../images/B.jpg'
import Slideimg1 from '../../images/C.jpg'
import Slideimg2 from '../../images/D.jpg'
import Command from '../Command'
import Footer from '../Footer'
import { Link } from "react-router-dom";
import Select from 'react-select';
export default function Home() {
 var counter = 0;
const trans = 300;
var num = trans * counter;
const[show,setShow]=useState(true);
const [dilevery,setDilevery]=useState(false);
const [wilaya,setWilaya]=useState(false);
const [wilaya2,setWilaya2]=useState(false);
//const [emporte,setEmporte]=useState(false);

/*
   const [input, setInput] = useState({
    dilivery:false,
       alger:false,
       communeAlger:"",
       boumerdes:false,
      communeboumerdes:"",
       emporte:false,
       jour:"",
       heur:"",
    });
 */
/*
    const handleChange = (event) => {
        setHeur(event.target.value);
        setJour(event.target.value);
      };
      */

  
  /**********************************pusher le type de la commande********************** */
 /*
  const addcommand=(product)=>{
    const cartItems={
      "cart" :{
        id:here._id,
        name:here.name,
       
        
    
      }
       
    }
    console.log(cartItems);
    axios.post("/addToCartUser2",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
    .then(response => {
     console.log("post with axios succed")
    }).catch(error => {
      console.log("the raison of failure", error) 
    });
    
    }     
 
 */
 
 /*********************************************************************************** */
  return (
        <div className="Home">

            <Carousel className="slide">
                <Carousel.Item className="carousselItem">
                    <img src={Slideimg1} className="carousselItem" />
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                    <img src={Slideimg2} className="carousselItem" />
                </Carousel.Item>


                <Carousel.Item className="carousselItem" >
                    <img src={Slideimg} className="carousselItem" />
                </Carousel.Item>
            </Carousel>

            <div className="container-m">

                <div className="description">
                    <p>
                    Une fabrication artisanale basée sur des ingrédients de qualité, du lait, de la crème et des oeufs, comme au beau vieux temps; mais aussi des gousses de vanille, du chocolat, des pralinés et des fruits d'excellence.
                  <br/> C'est ici la route que nous avons choisi d'entreprendre depuis 2015.
                    </p>
                </div>

{/*
                <div className="glaceContainer">
                    <div className="">
                        <img src={Picture} className="img-ac-size"/>
                    </div>

                    <div className="text-glace">
                         <h1> Amogela </h1>
                         <h2> Une passion glacée</h2> 
                        <div> <p>   Une fabrication artisanale basée sur des ingrédients de qualité, du lait, de la crème et des oeufs, comme au beau vieux temps. Mais aussi</p></div>
                    </div>
</div>*/}


            </div>


           









<Command />
<Footer />

        </div>
    )
}
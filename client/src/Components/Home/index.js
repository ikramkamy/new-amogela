import React,{useState,useEffect} from 'react'
import {FaHome, FaShoppingBag,FaBicycle, FaBaby, FaLocationArrow, FaBackspace, FaRecycle, FaArrowCircleLeft} from "react-icons/fa";
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
const handelwilaya=()=>{
    setWilaya(true)
    setAlger(true)
    setBoumerdes(false)
    setWilaya2(false)
    setLivraison(true)
}
const handelwilaya2=()=>{
    setWilaya(false)
    setWilaya2(true)
    setBoumerdes(true)
    setAlger(false)
    setLivraison(true)
}
const choiseDilivery=()=>{
    setDilevery(!dilevery)
    setShow(false)
    setEmporte(false)
}

const goback=()=>{
    setShow(true)
    setDilevery(false)
    setEmporte(false) 
}
const options = [
    { value: 'jeudi', label: 'jeudi' },
    { value: 'lundi', label: 'lundi' },
   ]
const options2=[{ value: '15:30', label: '15:30'}]
const comAlger=[{value: 'Alger-centre', label: 'Alger-centre'},
{value: 'Draria', label: 'Draria'}
]
const comBoumerdess=[{value: 'Draria', label: 'Draria'},
{value: 'Draria', label: 'Draria'}]
useEffect(()=>{
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close")
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    })

    
   }) 
const [livraison,setLivraison]=useState(false);
const [emporte,setEmporte]=useState(false);
const[alger,setAlger]=useState(false);
const [boumerdes,setBoumerdes]=useState(false);
const [heur,setHeur]=useState("");
const [jour,setJour]=useState("");

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
const [input,setInput]=useState({
    livraison:false,
    alger:false,
    communeAlger:"",
    boumerdes:false,
   communeboumerdes:"",
    emporte:false,
    jour:"",
    heur:"",

})
      const handelChange = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => {
          return {
            ...prevInput,
            [name]: value,
          };
        });
      };
      const validate=()=>{
       
         const   cart ={
               livraison:livraison,
                alger:alger,
                communeAlger:input.communeAlger,
                boumerdes:boumerdes,
               communeboumerdes:input.communeboumerdes,
                emporte:emporte,
                jour:input.jour,
                heur:input.heur,
          
            }
            console.log("CARRRT",cart)
}
const choiceEmporte=()=>{
    setEmporte(true) 
    setShow(false)
    setDilevery(false)
} 
  
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

            <div className="container">

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


            <div className="js-btn"></div>
<div class="modal">
    {  show &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <p>Comment voulez-vous récupérer votre commande?</p>
    <div className="choice-box">
<div className="emporte" onClick={choiceEmporte} ><FaHome />A emporté</div>
<div className="livraison-btn" onClick={choiseDilivery}><FaBicycle/> Livraison</div>


    </div>
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
   {/*<div className="btn-box-valid">Valider</div>*/}
   </div>)

    }
    {  emporte &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d"}}/>
     <p>Quand voulez-vous récupérer votre commande?</p>
     A quelle date?
   
    <select data-id="domain-switcher" onChange={handelChange} value={input.jour} type="text" name="jour" className="select-style" >
              <option defaultValue>  Date</option>
              <option value="jeudi" >jeudi</option>
              <option value="lundi" >lundi</option>
    </select>
    
   A quelle heure
   <select data-id="domain-switcher" onChange={handelChange} value={input.heur} type="text" name="heur" className="select-style" >
              <option defaultValue>  heure</option>
              <option value="15:30" >15:30</option>
              <option value="16:30" >16:30</option>
    </select>
      
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
    <div className="btn-box-valid" onClick={validate}>Valider</div>
    
   </div>)

    }
      { dilevery &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d"}}/>
     <p>la livraison est disponible pour ces endroits</p>
     <div className="choice-box">
     <div className="emporte"  onClick={handelwilaya}><FaLocationArrow/>Alger</div>
     <div className="emporte" onClick={handelwilaya2}><FaLocationArrow/> Boumerdes</div>
     </div>
     {wilaya &&(
     
     <select data-id="domain-switcher" onChange={handelChange} value={input.communeAlger} type="text" name="communeAlger" className="select-style" >
     <option defaultValue>  communeAlger</option>
     <option value="Alger-centre" >Alger-centre</option>
     <option value="Hydra" >Hydra</option>
     </select>
     
     
     
     )}
     {wilaya2 && ( 
         <select data-id="domain-switcher" onChange={handelChange} value={input.communeboumerdes} type="text" name="communeboumerdes" className="select-style" >
         <option defaultValue>communeboumerdes</option>
         <option value="Alger-centre" >commune01</option>
         <option value="Hydra" >commune02</option>
         </select>
     
     )}
   
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
    <div className="btn-box-valid" onClick={validate}>Valider</div>
   </div>)

    }


</div>












<Command />
<Footer />

        </div>
    )
}
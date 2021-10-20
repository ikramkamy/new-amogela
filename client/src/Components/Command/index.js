import React,{useState,useEffect} from 'react';
import './command.css';
import { Link } from 'react-router-dom';
import Clique from '../Clique';
import { FaPlusSquare } from 'react-icons/fa';
const Command = () => {
    const[clique,setClique]=useState(false);
    const[c2,setC2]=useState(false);
  const   handelclique=()=>{
    setClique(!clique);
    setC2(false)  
  }
  const handelLivraison=()=>{
    setClique(false);
    setC2(!c2) 
  }
return (<div className="Command">

<div className="containerCommand"> 

        <div className="bloc-command comBox1">
        <div className="back-color1"></div>
            <span className="command-name"><h1>Cliqué & Retiré</h1> 
            </span>
            <div className="command-btn cliqué" onClick={handelclique}>Commander</div>

            <div className="command-discreption">
            Commendez aujourd'hui et récuprérez en magazin le lendemain à une heure que vous choisissez</div>      
</div>
<div className="bloc-command comBox2">
    <div className="back-color2"></div>
            <span className="command-name"><h1>Service Livraison</h1>
            <h3 style={{width:"100%",textAlign:"center",position:"relative"}} >Alger/Boumerdes</h3>
            </span>
            
            <div className="command-btn livraison" onClick={handelLivraison}>Commander</div>

            <div className="command-discreption">Envie d'une glace, d'un Esquimau ou d'une toute autre gourmandise,Amogela arrive jusqu'à vous. choisissez votre produit et commander en ligne</div>
            </div>
<div className="bloc-command comBox3">
<div className="back-color3"></div>
            <span className="command-name"><h1> Shop pour les professionnels</h1>
           </span>
            <div className="command-btn" ><Link to="/shopPro" >Commander</Link></div>
            <div className="command-discreption">Vous êtes un professionnel(Restaurant, hotel, traiteur) et vous souhaiteriez  acquérir nos saveurs, Amogela met à votre disposition des bacs de format 3L et 5L</div>
</div>

       
        </div>

{clique &&(<Clique emporte={true} dilevery={false} show={false}  />)}
{c2  &&(<Clique      dilevery={true}  emporte={false} show={false}   />)}
    </div>

    )
}
export default Command;

import React from 'react';
import './command.css';
import { Link } from 'react-router-dom';

const Command = () => {
    return (<div className="Command">

<div className="containerCommand"> 

        <div className="bloc-command comBox1">
        <div className="back-color1"></div>
            <span className="command-name"><h1>Cliqué & Retiré </h1> 
            </span>
            <div className="command-btn"><Link to="/shop" >Commander</Link></div>

            <div className="command-discreption">Commendez aujord'hui et récuprérez en magazin le lendemain à une heure que vous choisissez</div>      
</div>
<div className="bloc-command comBox2">
    <div className="back-color2"></div>
            <span className="command-name"><h1>Service Livraison</h1>
            <h2 >Alger/Boumerdes</h2>
            </span>
            
            <div className="command-btn"><Link to="/shop" >Commander</Link></div>

            <div className="command-discreption">Envie d'une glace, d'un Esquimau ou d'une toute autre gourmandise,Amogela arrive jusqu'à vous. choisissez votre produit et commender en ligne</div>
            </div>
<div className="bloc-command comBox3">
<div className="back-color3"></div>
            <span className="command-name"><h1> Shop pour les professionnels</h1>
           </span>
            <div className="command-btn" ><Link to="/shop" >Commander</Link></div>
            <div className="command-discreption">Vous êtes un professionnel(Restaurant, hotel, traiteur) et vous souhaiteriez  acquérir nos saveurs, Amogela met à votre disposition des bacs de format 3L et 5L</div>
</div>

       
        </div>



    </div>

    )
}
export default Command;

import React from 'react';
import { Link } from 'react-router-dom';
import './clique.css';
import {FaPen,FaTrash,FaEye} from "react-icons/fa";
//import UserList from '../Utillisateurs/UserList';
const AchatList=(props)=>{
const {showAchat,cart,user}=props;

console.log("CAART IN ACGATLIST",cart)
console.log("CAART IN user",user)   
return(
<div className=" achat-list">

<div className="close" onClick={props.showhendel}>&times;</div>
<img src="/images/logoamo.png" className="logo-sign" alt='logo' style={{width:"50px", height:"50px"}}/>
<div className="achat-fields-header">

<div className="achat-elem-header">Nom</div>
<div className="achat-elem-header">Télèphone</div>
<div className="achat-elem-header">Type de commande</div>

</div>
{user?.map((e)=><div className="achat-fields-header mrg-btm">

<div className="achat-elem-header">{e.username}</div>
    <div className="achat-elem-header">+213{e.phone}</div>
    <div className="achat-elem-header">{e.commandeType[0].commande.command}</div>
    </div>)}

<div className="achat-fields">

<div className="achat-elem">le produits</div>
<div className="achat-elem ">la quantité</div>
<div className="achat-elem ">les gouts</div>

</div>
{cart?.map((e)=><div className="achat-fields">


    <div className="achat-elem achat-ajuster">{e.name}</div>
    <div className="achat-elem achat-ajuster" >{e.quantity}</div>
    <div className="achat-elem gout-style achat-ajuster">
        <div className="gout-ajuster">{e.gout1}</div>
        <div className="gout-ajuster">{e.gout2}<br/></div>
        <div className="gout-ajuster">{e.gout3}<br/></div>
        <div className="gout-ajuster">{e.gout4}<br/></div>
        <div className="gout-ajuster">{e.gout5}<br/></div>
        <div className="gout-ajuster">{e.gout6}<br/></div>
       </div>
    </div>)}
 </div>)
}
export default AchatList;
import React from 'react';
import { Link } from 'react-router-dom';
import './clique.css';
import {FaPen,FaTrash,FaEye} from "react-icons/fa";
import UserList from '../Utillisateurs/UserList';
const AchatList=(props)=>{
const {showAchat,cart}=props;

console.log("CAART IN ACGATLIST",cart)
    
return(
<div className=" achat-list">

<div className="close" onClick={props.showhendel}>&times;</div>
<img src="/images/logoamo.png" className="logo-sign" alt='logo' style={{width:"50px", height:"50px"}}/>

<div className="achat-fields">

<div className="achat-elem">le produits</div>
<div className="achat-elem">la quantité</div>
<div className="achat-elem">les gouts</div>

</div>
{cart?.map((e)=><div className="achat-fields">
    <div className="achat-elem">{e.name}</div>
    <div className="achat-elem">{e.quantity}</div>
    <div className="achat-elem">{e.gout1}{e.gout2}{e.gout3}{e.gout4}{e.gout5}{e.gout6}</div>
    </div>)}
 </div>)
}
export default AchatList;
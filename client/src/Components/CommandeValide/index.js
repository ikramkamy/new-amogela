import React from 'react';
import './cmdvalide.css';
import { Link } from 'react-router-dom';
const CommandeValide=()=>{
    const event = new CustomEvent("start", {

    });
    
    

    return(
     
      <div className="commande_valide">
          <div className="goto-shop-box">
<img src="/images/logoamo.png"/>
 <p>Votre Commande a étè prise en charge </p>
     <p>commencer une nouvel commande </p>
     
      
      <div className="btn-page-valide">
        <button className="choco-btn nohover"><Link to="/shop">Shop </Link></button></div>
     </div>








</div>


    )
}
export default CommandeValide;
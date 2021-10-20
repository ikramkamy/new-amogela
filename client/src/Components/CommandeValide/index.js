import React from 'react';
import './cmdvalide.css';
import { Link } from 'react-router-dom';
const CommandeValide=()=>{
    const event = new CustomEvent("start", {

    });
    
    document.addEventListener("DOMContentLoaded",() => {
      const the_button = document.querySelector(".js-btn")
      the_button.addEventListener("click", handleClick2)
    })
    function handleClick2(event) {
      const modal2 = document.querySelector(".modal2")
      const closeBtn2 = document.querySelector(".close2")
      modal2.style.display = "block";
      closeBtn2.addEventListener("click", () => {
        modal2.style.display = "none";
      })
     
    }

    return(
     
      <div className="commande_valide">
          <div className="goto-shop-box">
<img src="/images/logoamo.png"/>
 <p>Votre Commande a étè prise en charge </p>
     <p>commencer une nouvel commande </p>
     
      
      <div className=" bnt-val"><button className="choco-btn nohover"><Link to="/shop">Shop </Link></button></div>
     </div>






<div className="js-btn"></div>  
<div class="modal2">
   <div class="modal_content2">
     <span class="close2">&times;</span>
     <p>Votre Commande a étè prise en charge </p>
     <p>commencer une nouvel commande </p>
    
   </div>
</div>
</div>


    )
}
export default CommandeValide;
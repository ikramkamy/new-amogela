import React from 'react';
import './command.css';
import { Link } from 'react-router-dom';
const Command=()=>{
    return(<div className="Command">

<div className="bloc-command" style={{backgroundImage:"URL(/images/1.jpg)"}}>
    
    <span className="command-name"><h1>CLIQUEZ ET RETIREZ</h1>REGGIO EMILIA</span>
    <div className="command-btn"><a href="/shop" >Commander</a></div>
    
</div>
<div className="bloc-command" style={{backgroundImage:"URL(/images/2.jpg)"}}>
<span className="command-name"><h1>HOME DELIVERY</h1>
REGGIO EMILIA</span>
    <div className="command-btn"><a href="/shop">Commander</a></div>
</div>
<div className="bloc-command" style={{backgroundImage:"URL(/images/3.jpg)"}}>
<span className="command-name"><h1>SHOP <br/>ONLINE</h1>
REGGIO EMILIA</span>
    <div className="command-btn" ><a href="https://food.jumia.com.ng/">Commander</a></div>
   
</div>


    </div>

    )
}
export default Command;
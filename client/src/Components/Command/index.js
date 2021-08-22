import React from 'react';
import './command.css';
import { Link } from 'react-router-dom';

const Command = () => {
    return (<div className="Command">

<div className="containerCommand"> 
        <div className="bloc-command comBox1">

            <span className="command-name"><h1>Cliquez & Retirez </h1> 
            <h3> Amogela Glaces </h3></span>
            <div className="command-btn"><a href="/shop" >Commander</a></div>

        </div>
        <div className="bloc-command comBox2">
            <span className="command-name"><h1>Service Livraison</h1>
           <h3> Amogela Glaces </h3> </span>
            <div className="command-btn"><a href="/shop">Commander</a></div>
        </div>
        <div className="bloc-command comBox3">
            <span className="command-name"><h1> Shop professionnel</h1>
           <h3> Amogela Glaces </h3> </span>
            <div className="command-btn" ><a href="https://food.jumia.com.ng/">Commander</a></div>

        </div>
        </div>

    </div>

    )
}
export default Command;
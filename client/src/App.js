import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Command from './Components/Command';
import Product from './Components/Product';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import MySidebar from './Components/MySidebar';
import Admin from './Components/Admin';
import Modal from './Components/Modal';
import ProdbyID from './Components/ProdbyID';


function App() {
  const [open,setOpen]=useState(false);
  const close=()=>{
    setOpen(false);
  }
  return (
    <div className="App">
   <Router> 
  
 
    <Switch> 
    <route exact path="/accueil">
   <Modal open={open} close={close} />
  <Command openModal={()=>setOpen(true)}/>
     </route>
      <route path="/signin/admin">
    <Admin/>
    </route>
    <route path="/signin">
    <Signin/>
</route>
    <route exact path="/shop" >

<Product/>
    </route>
    
<route path="/prodbyID">
<ProdbyID />

</route>


     </Switch> 
     </Router>




    </div>
  );
}

export default App;

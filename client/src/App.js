import './App.css';
import React, {useState } from 'react'
import {BrowserRouter as Router,Switch, Route, useParams } from "react-router-dom"
import Command from './Components/Command';
import Product from './Components/Product';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import MySidebar from './Components/MySidebar';
import Admin from './Components/Admin';
import Modal from './Components/Modal';
import ProdbyID from './Components/ProdbyID';
import {Product2,Product3,Product4,Product5 }from './Components/Product/Product2';
import Mynavbar from './Components/Mynavbar';
import ShopinCart from './Components/Shopingcart';
import Home from './Components/Home';
import Glaces from './Components/Glacesetsorbet';
import Histoire from './Components/Histoire';
import Consulting from './Components/Consulting';
import Counter from './Components/Dispatchtest';
import Chocolat from './Components/Chocolat';
import CommandeValide from './Components/CommandeValide';
import { Link } from "react-router-dom";

import Lognav from './Components/Lognav';
import Footer from './Components/Footer';
import Clientpage from "./Components/Clientpage";
import ShopPro from "./Components/ShopPro";
function App() {
  const [open,setOpen]=useState(false);
  const [etat, setEtat] = useState(false);
  const [show,setShow]=useState(false);
  const user_id=localStorage.getItem('user_id');
const showinscription=()=>{
  setShow(!show);
}
 
 
  const close=()=>{
    setOpen(false);
}
  return (
    <div className="App">
   <Router> 
  <Switch> 
  <Route exact path="/">
  <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logos.jpg" className="product-logo" />
        </Link>
       
        </div>
       
        <Mynavbar className="stylemodify"/>
        <Home/>
</Route>
    <Route exact path="/accueil">
   
   <Modal open={open} close={close} />
  <Command openModal={()=>setOpen(true)}/>
     </Route>

     <Route exact path="/Glacesetsorbets" >
    <Glaces/>

    </Route>

<Route exact path="/signin/admin">
    <Admin/>
    </Route>
 <Route exact path="/signin">
   <div className="sign-page">
  
   <Mynavbar/>
   
   <Lognav/>
   
     <Signin/>
     
 <Footer/>
 
 </div>
</Route>
<Route exact path="/shop">
<Product/>
</Route>
    
<Route  path="/ID/:productId">
<ProdbyID prodID="6112eae87406252de8f9e039" />

</Route>
<Route path="/shop-barquette" component={Product2}/>
<Route path="/escimau-biscuit" component={Product3}/>
<Route exact path="/entremets-glace"  component={Product4}/>
<Route path="/chocolat-confiserie" component={Product5}/>
<Route path="/shopPro" component={ShopPro}/>
<Route path="/home">
<div className="navv">
<Mynavbar/>
      </div>
</Route>

<Route path="/shopingcart/:userId">

<ShopinCart/>

</Route>

<Route path="/nav">
<Mynavbar/>

<Lognav/>
</Route>
<Route exact path='/histoire' component={Histoire}/>
<Route exact path='/Consulting' component={Consulting}/>
<Route exact path="/Chocolat" component={Chocolat}/>
<Route exact path="/commadevalidee" component={CommandeValide}/>

<Route  path="/clientpage" component={Clientpage}/>
     </Switch> 
     </Router>



    </div>
  );
}

export default App;

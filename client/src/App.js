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
import Lognav from './Components/Lognav';
import CommandeValide from './Components/CommandeValide';
import { Link } from "react-router-dom";
import Mod from './Components/Mod';
function App() {
  const [open,setOpen]=useState(false);
  const [etat, setEtat] = useState(false);
  const [show,setShow]=useState(false);
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
          <img src="/images/logo.png" className="product-logo" />
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
      {show && (<Signup/>)}
    {!show && ( <Signin showinscription={showinscription}/>)}
   
</Route>
<Route exact path="/shop" >
<Product/>
</Route>
    
<Route  path="/ID/:productId">
<ProdbyID prodID="6112eae87406252de8f9e039" />

</Route>
<Route path="/shop-barquette" component={Product2}/>
<Route path="/escimau-biscuit" component={Product3}/>
<Route exact path="/entremets-glace"  component={Product4}/>
<Route path="/chocolat-confiserie" component={Product5}/>

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
lalall
<Lognav/>
</Route>
<Route exact path='/histoire' component={Histoire}/>
<Route exact path='/Consulting' component={Consulting}/>
<Route exact path="/Chocolat" component={Chocolat}/>
<Route exact path="/commadevalidee" component={CommandeValide}/>
<Route exact path="/mod" component={Mod}/>
     </Switch> 
     </Router>



     
    </div>
  );
}

export default App;

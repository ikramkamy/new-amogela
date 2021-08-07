import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Command from './Components/Command';
import Product from './Components/Product';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import MySidebar from './Components/MySidebar';
import Admin from './Components/Admin';
function App() {
  return (
    <div className="App">
   <Router> 
  
   <route path="/accueil">

       <a href="/signin">Admin</a>
     </route>
    <Switch> 
      <route path="/signin/admin">
    <Admin/>
    </route>
    <route path="/signin">
    <Signin/>

    </route>
    
    <Signup/>



     </Switch> 
     </Router>




    </div>
  );
}

export default App;

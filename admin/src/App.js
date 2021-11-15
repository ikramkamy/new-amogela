
import './App.css';
import {FaIceCream,FaGlasses,FaJediOrder,FaCube,FaProductHunt,FaTasks,FaImage,FaClock,FaUser} from "react-icons/fa";
import {BrowserRouter as Router,Switch, Route, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Utilisateurs from './component/Utillisateurs';
import Opning from './component/Opning';
import Barquette from './component/Barquettes';
import Gout from './component/Gout';
import PhotosPages from './component/PhotoPages';
import CliqueetR from './component/CliqueetR';
import Livraison from './component/Livraison';
import ProduitsStock from './component/ProduitsStock';
import Consult from './component/Consult';
function App() {
  return (
    <div className="App">
        <Router>
    <div className="side-bar">
  
<div className="side-elements">
 <div className="admin-name">Toufik khalef </div>
<div className="side-elem"><FaUser className="icon-side"/><Link to="/users">Utilisateurs</Link></div>
<div className="side-elem"><FaProductHunt className="icon-side"/><Link to="/produits">Produits sur stock</Link></div>
<div className="side-elem"><FaCube className="icon-side"/><Link  to="/barquettes">Barquettes</Link></div>
<div className="side-elem"><FaIceCream className="icon-side"/><Link to="/gouts">Gouts</Link></div>
<div className="side-elem"><FaJediOrder className="icon-side"/><Link to="/Cliqué-et-retiré" >Cliqué et Retiré</Link></div>
<div className="side-elem"><FaTasks className="icon-side"/><Link to="/livraison">Cammande Livraison</Link></div>
<div className="side-elem"><FaGlasses className="icon-side"/><Link to="/commandeProfessionnelles">Cammande Proffesionnelles</Link></div>
<div className="side-elem"><FaImage className="icon-side"/><Link to="/photos">Photos pages</Link></div>
<div className="side-elem"><FaClock className="icon-side"/><Link  to="/heure">Les heurs de travail</Link></div>
<div className="side-elem"><FaClock className="icon-side"/><Link  to="/">Consulting</Link></div>
</div>
</div>

  <Switch> 
<Route exact path="/">

<div className="admin-page">

<div>
  <img src="/images/logos.jpg" />
  <h1>Page Admin </h1>
  </div>
</div>



</Route>
<Route exact path="/users" component={Utilisateurs }/>
<Route exact path='/heure' component={Opning}/> 
<Route exact path="/barquettes" >
<Barquette/>
</Route>
<Route  exact path="/barquettes/:_id" component={Barquette} />
<Route exact path="/gouts" component={Gout}/>
<Route exact path="/gouts/:_id" component={Gout}/>
<Route exact path="/photos"  component={ PhotosPages}/>
<Route exact path="/photos/:_id"  component={ PhotosPages}/>
<Route exact path="/Cliqué-et-retiré"  component={CliqueetR}/>
<Route exact path="/Cliqué-et-retiré/:_id"  component={CliqueetR}/>
<Route exact path="/produits" component={ProduitsStock} />
<Route exact path="/produits/:_id" component={ProduitsStock} />
<Route exact path="/Livraison" component={Livraison}/>
<Route exact path="/Livraison/:type" component={Livraison}/>
<Route exact path="/commandeProfessionnelles" component={Consult}/>
</Switch>
</Router>




    </div>
  );
}

export default App;

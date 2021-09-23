import React,{useState,useEffect} from "react";
import Lognav from '../Lognav';
import Mynavbar from "../Mynavbar";
import Footer from "../Footer";
import {FaShoppingBag,FaWindowClose  } from "react-icons/fa";
import ShopinCart from '../Shopingcart';
import axios from "axios";
import { Link } from 'react-router-dom';
import Mycommand from './Mycommand';
const Clientpage=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [user,setUser]=useState();
    const [here,setHere]=useState([]);
    const user_id=localStorage.getItem('user_id');
    const [idCommand,setIdCommand]=useState("");
    /******************************************************/
    useEffect(() => {
      const expensesListResp = async () => {
        await axios.get(`/getMycartUserprofile/${user_id}`)
        .then(response =>setUser(response.data))
         }
         
      expensesListResp();
    }, []);
 
    /******************************************************/
    const Handelopne = () => {
        setIsOpen(!isOpen);
        };
        useEffect(() => {
            const expensesListResp = async () => {
              await axios.get(`/getcommandeByID/${user_id}`)
              .then(response =>setHere(response.data))
            } 
            expensesListResp();
          }, []);
console.log("MYCOMMANDS",here)
    return(<div className="">
      
<Mynavbar/>
<Lognav/>
<div className="shoping-cart-icon">
{/*<div className="tite-panier" ></div>*/}
<FaShoppingBag className="icon-shoping" onClick={Handelopne /*() =>/* {history.push(`/shopingcart/:${user_id}`) }*/} />
         
</div>
{isOpen &&

(<div class="modal-side-shop">
<div className="side-shop" >
<div className="shoping-cart-icon">
<FaWindowClose className="icon-Close-cart" onClick={Handelopne}/>
</div> 
  <ShopinCart/>
  </div>
  </div>)
}
{here.map((e)=><Mycommand  sommme={e.somme}/>)}
{here._id}
the user id is here :{user_id}
{/*<Link to={`/clientpage/:${here._id}`} style={{color:"red"}}>Ajouter</Link>*/}

<Footer/>
    </div>)
}
export default Clientpage;
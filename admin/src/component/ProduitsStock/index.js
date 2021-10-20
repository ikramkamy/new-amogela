import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import ProduitCreate from './CreatProduct';
import ProduitsList from './ProduitsList';
import EditeProduit from './EditeProduit';
import { useHistory } from 'react-router';
const ProduitsStock=(props)=>{
  const [produits,setProduits]=useState([]);
  let {_id}=useParams();
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  const history=useHistory();
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/produitsStock`)
      .then(response =>setProduits(response.data))
   }
    expensesListResp();
  },[produits]);
   
    const handelDelete=(e)=>{
     alert("voulez-vous supprimer ce produit?") 

    axios.delete(`/deleteProduits/${e._id}`)

      .then()
     
      }


return(
<div className="open">
<div className="btn-create">
   <div ><FaPlus className="icon-creat" onClick={(()=>setShow1(true))}/>Créer</div>
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
<div className="tableau">

    <div className="tab-item">Produit</div>
    <div className="tab-item">Cathégorie</div>
    <div className="tab-item">prix </div>
    <div className="tab-item">disponible</div>
    <div className="tab-item"> </div>
    <div className="tab-item"> </div>
</div>
{produits?.map((e)=><ProduitsList name={e.name} _id={e._id} prix={e.prix} disponible={e.disponible} cathegorie={e.cathegorie}  show={(()=>setShow(true))} handelDelete={()=>handelDelete(e)}/>)}

{
show&&(<EditeProduit  _id="" showhendel={(()=>setShow(false))}/>)
  
}
{
 show1&&(<ProduitCreate showhendel1={(()=>setShow1(false))}/>) 
}

 </div>)}
export default ProduitsStock;
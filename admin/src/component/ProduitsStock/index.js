import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import ProduitCreate from './CreatProduct';
import ProduitsList from './ProduitsList';
const ProduitsStock=(props)=>{
  const [produits,setProduits]=useState([]);
  let {_id}=useParams();
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/produitsStock`)
      .then(response =>setProduits(response.data))
   }
    expensesListResp();
  },[produits]);
    console.log("Les produits sur stock",produits)
    const handelDelete=()=>{
       
    axios.delete(`/deleteProduits/${_id}`)

      .then()
      }


return(
<div className="open">
<div className="btn-create">
   <div ><FaPlus className="icon-creat" onClick={(()=>setShow1(true))}/>Créer</div>
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
<div className="tableau">
    <div className="tab-item">ID</div>
    <div className="tab-item">Produit</div>
    <div className="tab-item">Cathégorie</div>
    <div className="tab-item">prix </div>
    <div className="tab-item">disponible</div>
    <div className="tab-item"> </div>
    <div className="tab-item"> </div>
</div>
{produits?.map((e)=><ProduitsList name={e.name} _id={e._id} prix={e.prix} disponible={e.disponible} cathegorie={e.cathegorie}  show={(()=>setShow(true))} handelDelete={()=>handelDelete(e)}/>)}

{
show&&(<div _id="" showhendel={(()=>setShow(false))}></div>)
  
}
{
 show1&&(<ProduitCreate showhendel1={(()=>setShow1(false))}/>) 
}

 </div>)}
export default ProduitsStock;
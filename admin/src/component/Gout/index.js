import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import GoutList from './GoutList';
import axios from 'axios';
import GoutEdit from "./GoutEdit";
import GoutCreate from "./GoutCreate";
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
const Gout=(props)=>{
  const [gout,setGout]=useState([]);
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/gouts`)
      .then(response =>setGout(response.data))
   }
    expensesListResp();
  });
    console.log("Gout", gout)
    const handelDelete=(user)=>{
    axios.delete(`/api/gouts/${user._id}`,)
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
    <div className="tab-item">Gout</div>
    <div className="tab-item">Disponible </div>
    <div className="tab-item"></div>
    <div className="tab-item"></div>
</div>

{gout?.map((e)=><GoutList name={e.name} _id={e._id}  disponible={e.disponible} show={(()=>setShow(true) )}/>)}
{
  show&&(<GoutEdit  showhendel={(()=>setShow(false))}/>)
}
{
    show1&&(<GoutCreate  showhendel1={(()=>setShow1(false))}/>)
}
 </div>)}
export default Gout;
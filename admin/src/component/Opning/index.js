import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './open.css';
import axios from 'axios';
import OpenEdit from "./OpenEdit";

import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
const Opning=(props)=>{
  const [open,setOpen]=useState([]);
  const [show,setShow]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/notes`)
      .then(response =>setOpen(response.data))
   }
    expensesListResp();
  });
    console.log("Heure de travail", open)
    const handelDelete=(user)=>{
    axios.delete(`/api/utilisateurs/${user._id}`,)
      .then()
      }


return(
<div className="open">
 
<div className="tableau">
    <div className="tab-item">ID</div>
    <div className="tab-item">Heure de travail</div>
    <div className="tab-item">Modifier </div>
    <div className="tab-item"></div>
</div>
<div className="tableau">
    <div className="tab-item">{open[0]?._id}</div>
    <div className="tab-item">{open[0]?.text}</div>
    <div className="tab-item" onClick={(()=>setShow(true))}><FaPen className="icon-edit-u" /><Link to='/heure' >Edit</Link>  </div>
    <div className="tab-item"></div>
</div>

{
  show&&(<OpenEdit _id={open[0]?._id} showhendel={(()=>setShow(false))}/>)
}

 </div>)}
export default Opning;
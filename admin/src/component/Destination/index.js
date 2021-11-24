import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
import DestinationList from './DestinationList';
import DestinationEdit from './DestinationEdit';
import DestinationCreate from './DestinationCreate';
const Destination=(props)=>{
  const [destination,setDestination]=useState([]);
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/detinationbywilaya/Alger`)
      .then(response =>setDestination(response.data))
   }
    expensesListResp();
  },[destination]);
    
    const handelDelete=(user)=>{
    axios.delete(`/api/destination/${user._id}`,)
      .then()
      }
//console.log("destination",destination);

return(
<div className="utilisateurs">
<div className="wrap-data">
<div className="btn-create">
   <div ><FaPlus className="icon-creat" onClick={(()=>setShow1(true))}/>Créer</div>
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
   <h1 className="title-pages-admin"> la liste des destinations</h1>
<div className="tableau">
<div className="item-user">La wilaya</div>
<div className="item-user">La destination</div>
<div className="item-user">Le tarif </div>
<div className="item-user"></div>
<div className="item-user"></div>
</div>

{destination?.map((e)=>
<DestinationList name={e.name} _id={e._id} 
wilaya={e.wilaya} 
disponible={e.disponible} show={(()=>setShow(true) )} handelDelete={(()=>handelDelete(e))}/>)}
{
show&&(<DestinationEdit  showhendel={(()=>setShow(false))}/>)
}
{
show1&&(<DestinationCreate  showhendel1={(()=>setShow1(false))}/>)
}
</div>
 </div>)}
export default  Destination;
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
import BarquetteEdit from './BarquetteEdit';
import BarquetteList from './BarquetteList';
import BarquetteCreate from './BarquetteCreate';
import { useParams } from 'react-router-dom';
const Barquette=(props)=>{
  const [barquette,setBarquette]=useState([]);
  let {_id}=useParams();
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/Barquettes`)
      .then(response =>setBarquette(response.data))
   }
    expensesListResp();
  },[barquette]);
    console.log("Barquettes de glaces", barquette)
    const handelDelete=(e)=>{
    axios.delete(`/api/barquettes/${e._id}`,)
      .then()
      }


return(
<div className="utilisateurs">
<div className="wrap-data">
<div className="btn-create">
   <div ><FaPlus className="icon-creat" onClick={(()=>setShow1(true))}/>Créer</div>
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
   <h1 className="title-pages-admin"> les barquettes de glaces</h1>
<div className="tableau">
    
    <div className="tab-item tit">barquette</div>
    <div className="tab-item  tit">prix</div>
    <div className="tab-item tit">disposible</div>
    <div className="tab-item tit">Photo</div>
    <div className="tab-item tit"> </div>
    <div className="tab-item tit"> </div>
</div>
{barquette?.map((e)=><BarquetteList img={e.img} name={e.name} _id={e._id} prix={e.prix} disponible={e.disponible} show={(()=>setShow(true))} handelDelete={()=>handelDelete(e)}/>)}

{
show&&(<BarquetteEdit _id="" showhendel={(()=>setShow(false))}/>)
  
}
{
 show1&&(<BarquetteCreate  showhendel1={(()=>setShow1(false))}  />) 
}
</div>
 </div>)}
export default Barquette;
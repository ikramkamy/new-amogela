import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PhotoCreate from './PhotoCreate';
import PhotoList from './PhotoList';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";

const PhotosPages=(props)=>{
    
  const [photos,setPhotos]=useState([]);
  const [show,setShow]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/photoPages`)
      .then(response =>setPhotos(response.data))
   }
    expensesListResp();
  },[]);
    console.log("La liste des photos à modifier", photos)
  


return(
<div className="open">
<div className="btn-create">
   <div ><FaPlus className="icon-creat" onClick={(()=>setShow(true))}/>Créer</div>
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
   <div className="tableau">
    
    <div className="tab-item">La page</div>
    <div className="tab-item">images </div>
    <div className="tab-item"></div>
    <div className="tab-item"></div>
</div>
{photos?.map((e)=><PhotoList name={e.name} _id={e._id} img={e.img}  />)}
{
    show&&(<PhotoCreate showhendel1={()=>setShow(false)} />)
}
 </div>)}
export default PhotosPages;
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PhotoCreate from './PhotoCreate';
import PhotoList from './PhotoList';
import PhotoEdite from './PhotoEdit';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";

const PhotosPages=(props)=>{
const [photos,setPhotos]=useState([]);
const [show,setShow]=useState(false);
const [show2,setShow2]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/photos-pages`)
      .then(response =>setPhotos(response.data))
   }
    expensesListResp();
  },[photos]);
    console.log("La liste des photos à modifier", photos)
  

    const handelDelete=(e)=>{
      alert("Vouler-vous supprimer cette photo?")
      axios.delete(`/supprimer/${e._id}`,)
      .then()
      console.log(e._id)
        }
  
return(
<div className="utilisateurs">
  <div className="wrap-data">
<div className="btn-create">
   <div ><FaPlus className="icon-creat" onClick={(()=>setShow(true))}/>Créer</div>
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
   <div className="tableau">
    
    <div className="item-user">La page</div>
    <div className="item-user">images</div>
    <div className="item-user"></div>
    <div className="item-user"></div>
</div>

{photos?.map((e)=><PhotoList 
name={e.name} 
_id={e._id} 
img={e.img}  
page={e.page} 
handelDelete={()=>handelDelete(e)}
showhendel2={(()=>setShow2(!show2))}
/>)}
{
    show&&(<PhotoCreate showhendel1={()=>setShow(false)} />)
}
</div>

{
    show2&&(<PhotoEdite  showhendel2={(()=>setShow2(!show2))}/>)
}
 </div>)}
export default PhotosPages;
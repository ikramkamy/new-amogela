import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen,FaSave} from "react-icons/fa";
import { useParams } from 'react-router-dom';
const BarquetteEdit=(props)=>{
    let {_id}=useParams();
  const {showhendel}=props;
    //console.log("ID FROM PARAMS",_id);
    const[updates,setUpdates]=useState({
        _id:_id,
        name:"Produit",
        prix:"1 DA",
        disponible:"oui"
       });
    console.log("UPDATES",updates)
const handelchange=(event)=>{
const {name,value}=event.target;
      setUpdates(prevInput=>{
        return  { 
          ...prevInput,
          [name]:value }
      })
    }
    const update=()=>{
        if(updates.name===""){
alert("Remplissez les cases vides SVP")
        }else{
      axios.post(`/api/findOneAndUpdate/${_id}`,{
          _id:"",
          name:updates.name,
          prix:updates.prix,
         disponible:updates.disponible
         
        })
    .then(setUpdates({
          name:"",
          _id:"",
          prix:"",
          disponible:""
        })
    ) 
    showhendel();
    }}
return(
    <div className="Edite">

    <div className="close" onClick={props.showhendel}>&times;</div>
    <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
    
    <div className="Edit-fields">
    
    <div></div>
  
    
    
    <select placeholder="Barquettes" type="text"  name="name" onChange={handelchange} value={updates.name}>
   <option value="Selectionner">Selectionner</option>
<option value="Barquettes 500g">Barquettes 500g</option>
<option value="Barquettes 750g">Barquettes 750g</option>
<option value="Barquettes 1000g">Barquettes 1000g</option>
   </select>
    <input placeholder="Prix" name="prix" onChange={handelchange} value={updates.prix} required/>
    
    
    <select placeholder="Disponible?" type="text"  name="disponible" onChange={handelchange} value={updates.disponible}>
    <option value="disponible">Selectionner</option>
   <option value="disponible">disponible</option>
   <option value="non disponible"> non disponible</option>
   </select>




    </div>
    <div className="save-btn" onClick={update} >Enregistrer</div>
     </div>)
     }
export default BarquetteEdit;
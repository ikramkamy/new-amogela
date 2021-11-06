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
    <input placeholder="_ID" name="_id" value={_id}/>
    <input placeholder="Barquettes" name="name" onChange={handelchange} value={updates.name} required={true}/>
    <input placeholder="Prix" name="prix" onChange={handelchange} value={updates.prix} required/>
    <input placeholder="Disponible" name="disponible" onChange={handelchange} value={updates.disponible} required/>
    
    </div>
    <div className="save-btn" onClick={update} ><FaSave className="icon-save"  /> save</div>
     </div>)
     }
export default BarquetteEdit;
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen,FaSave} from "react-icons/fa";
import { useParams } from 'react-router-dom';
const EditeProduit=(props)=>{
    let {_id}=useParams();

  const {showhendel}=props;
    console.log("ID FROM PARAMS",_id);
    const[updates,setUpdates]=useState({
        _id:_id,
        name:"",
        prix:"",
        disponible:"",
        cathegorie:"",
        img:"",
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
      axios.post(`/updateProduitSS/${_id}`,{
          _id:"",
          name:updates.name,
          prix:updates.prix,
         disponible:updates.disponible,
         cathegorie:updates.cathegorie,
         img:updates.img,
         
        })
    .then(setUpdates({
          name:"",
          _id:"",
          prix:"",
          disponible:"",
          img:"",
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
   
    <input placeholder="Produit" name="name" onChange={handelchange} value={updates.name} required={true}/>
    <input placeholder="Prix" name="prix" onChange={handelchange} value={updates.prix} required/>
    <select  onChange={handelchange} value={updates.cathegorie} type="text" name="cathegorie" >
   <option label="selectioner" value="selectioner"></option>
            <option label="chocolat-confiserie" value="chocolat-confiserie"></option>
            <option label="entremets-glace" value="entremets-glace"></option>
            <option label="Escimau-biscuit" value="Escimau-biscuit"></option>
  </select>
    <input placeholder="Disponible" name="disponible" onChange={handelchange} value={updates.disponible} required/>
   <input type="file"  className="input-img"  placeholder="image" name="img" onChange={handelchange} value={updates.img}/>
    </div>
    <div className="save-btn" onClick={update} >Enregistrer</div>
     </div>)
     }
export default EditeProduit;
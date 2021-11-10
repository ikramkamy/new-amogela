import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {FaSave} from "react-icons/fa";
const GoutEdit=(props)=>{
    let {_id}=useParams();
  const{ showhendel} =props;
const[updates,setUpdates]=useState({
          _id:_id,
          name:"",
          disponible:""
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
        if(updates.name===""|| updates.disponible==="" ){

          alert('Remlissez les champs vides SVP')
        }else{
        axios.put(`/api/gouts/${_id}`,
        {name:updates.name,
       disponible:updates.disponible 
        })
      .then(
        setUpdates({name:"",
    _id:"",
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

<input placeholder="Gout" name="name" onChange={handelchange} value={updates.name}/>
<input placeholder="Disponible sur stock?" required name="disponible" onChange={handelchange} value={updates.disponible}/>
</div>
<div className="save-btn" onClick={update}>save</div>
 </div>)
}
export default GoutEdit;
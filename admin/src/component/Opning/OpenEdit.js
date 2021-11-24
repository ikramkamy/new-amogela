import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './edit.css';
import axios from 'axios';
import {FaSave} from "react-icons/fa";

const OpenEdit=(props)=>{
  const { showhendel}=props;
  const[updates,setUpdates]=useState({
    _id:props._id,
    text:""
  });
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/notes`)
      .then(response =>setUpdates(response.data[0]))
   }
    expensesListResp();
  },[]);
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
        axios.post(`/api/note`,{text:updates.text,_id:props._id})
      .then(
        
        setUpdates({text:"",
    _id:""})
      ) 
      showhendel(); 
      }
return(
<div className="Edite">

<div className="close" onClick={showhendel}>&times;</div>
<img src="/images/logoamo.png" className="logo-sign" alt='logo'/>

<div className="Edit-fields">

<div></div>
<input placeholder="Heure de travail" name="text" onChange={handelchange} value={updates.text}/>
</div>

<div className="save-btn"  onClick={update}> Enregistrer</div>
 </div>)
}
export default OpenEdit;
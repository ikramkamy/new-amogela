import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {FaSave} from "react-icons/fa";
import useForceUpdate from 'use-force-update';
const DestinationEdit=(props)=>{
  let {_id}=useParams();
  const forceUpdate = useForceUpdate();
  const [destination,setDestination]=useState([])
  const[updates,setUpdates]=useState({
    name:"",
    wilaya:"",
  })
useEffect(() => {
      const expensesListResp = async () => {
        await axios.get(`/getdestinationbyid/${_id}`)
        .then(response =>setDestination(response.data))
        forceUpdate();
     }
      expensesListResp();
    },[]);
   // console.log("destination",destination)
  const{ showhendel} =props;
  useEffect(()=>{
    console.log("UPDATES",updates)
    console.log("UPDATES nmae",updates.name)
    setUpdates(destination)
 
  },[])
const handelchange=(event)=>{
const {name,value}=event.target;
        setUpdates(prevInput=>{
          return  { 
            ...prevInput,
            [name]:value }
        })
      }
      const update=()=>{
        axios.put(`/api/destination/${_id}`,
        {name:updates.name,
    
        })
      .then(
        setUpdates({name:"",
    _id:"",
    disponible:""
})
      ) 
      showhendel(); 
      }
return(
<div className="Edite">

<div className="close" onClick={props.showhendel}>&times;</div>
<img src="/images/logoamo.png" className="logo-sign" alt='logo'/>

<div className="Edit-fields">


<input placeholder="Destination" name="name" onChange={handelchange} value={updates.name}/>

</div>
<div className="save-btn" onClick={update}>save</div>
 </div>)
}
export default DestinationEdit;
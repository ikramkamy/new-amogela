import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import './destination.css';


const DestinationCreate=(props)=>{
  const {showhendel1}=props;
    const [destination,setDestination]=useState(
      {    
        name:"",
        wilaya:"",
    }
);
const handelchange=(event)=>{
  const {name,value}=event.target;
  setDestination(prevInput=>{
          return  { 
            ...prevInput,
            [name]:value }
        })
      }
    const create=()=>{
        console.log("destination",destination)
        const expensesListResp = async () => {
          
      
          await axios.post(`/destination`,destination)
          .then(setDestination({
            name:"",
            wilaya:"",
          }))
       }
        expensesListResp();
        showhendel1();
      }
     
      
   return( <div className="Edite">

   <div className="close" onClick={props.showhendel1}>&times;</div>
   <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
   
   <div className="Edit-fields">
   
   <div></div>
   
   <label>la wilaya</label>
   <select  name="wilaya"  onChange={handelchange} value={destination.wilaya}>
     
   <option value="Selectionner"  >Selectionner</option>
<option value="Alger">Alger</option>
<option value="Boumerdes">Boumerdes</option>

   </select>
   <label>la commune</label>
   <input placeholder="Destiantion" name="name" onChange={handelchange} value={destination.name}/>
   </div>
   <div className="save-btn" onClick={create} >Créer</div>
    </div>)
  
  }
  export default  DestinationCreate;
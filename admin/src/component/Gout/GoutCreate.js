import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';



const GoutCreate=(props)=>{
    const [gout,setGout]=useState(
      {    
        name:"",
        prix:"",
        disponible:""}
);
    const create=()=>{
        
        const expensesListResp = async () => {
          
      
          await axios.post(`/api/gouts`,gout)
          .then(setGout({
            name:"",
           
            disponible:""


          }))
       }
        expensesListResp();
      
      }
     
      const handelchange=(event)=>{
        const {name,value}=event.target;
        setGout(prevInput=>{
                return  { 
                  ...prevInput,
                  [name]:value }
              })
            }
   return( <div className="Edite">

   <div className="close" onClick={props.showhendel1}>&times;</div>
   <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
   
   <div className="Edit-fields">
   
   <div></div>
   
   <input placeholder="Gout" name="name" onChange={handelchange} value={gout.name}/>
   <input placeholder="Prix" name="prix" onChange={handelchange} value={gout.prix}/>
   <input placeholder="Disponible sur stock?" name="disponible" onChange={handelchange} value={gout.disponible}/>
   </div>
   <div className="save-btn" onClick={create} ><FaPlus className="icon-save" onClick={props.showhendel1} /> Ajouter</div>
    </div>)
  
  }
  export default GoutCreate;
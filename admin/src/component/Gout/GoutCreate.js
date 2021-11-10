import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';



const GoutCreate=(props)=>{
  const {showhendel1}=props;
    const [gout,setGout]=useState(
      {    
        name:"",
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
        showhendel1();
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
  
   <input placeholder="Disponible sur stock?" name="disponible" onChange={handelchange} value={gout.disponible}/>
   </div>
   <div className="save-btn" onClick={create} >Créer</div>
    </div>)
  
  }
  export default GoutCreate;
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';



const BarquetteCreate=(props)=>{
  const {showhendel1}=props;
    const [barquette,setBarquette]=useState(
      {  name:"",
        quantite:"",
        disponible:"",
        prix:""}


    );
    const create=()=>{
        
        const expensesListResp = async () => {
          
      
          await axios.post(`/api/addbarquette`,barquette)
          .then(response =>setBarquette(response.data))
       }
        expensesListResp();
        showhendel1();
      }
     
      const handelchange=(event)=>{
        const {name,value}=event.target;
          setBarquette(prevInput=>{
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
   
   
   <select placeholder="Barquettes" type="text"  name="name" onChange={handelchange} value={barquette.name}>
   <option value="Selectionner">Selectionner</option>
<option value="Barquettes 500g">Barquettes 500g</option>
<option value="Barquettes 750g">Barquettes 750g</option>
<option value="Barquettes 1000g">Barquettes 1000g</option>
   </select>
   <input placeholder="Prix" name="prix" onChange={handelchange} value={barquette.prix}/>
   <input placeholder="Disponible sur stock?" name="disponible" onChange={handelchange} value={barquette.disponible}/>
   </div>
   <div className="save-btn" onClick={create} ><FaPlus className="icon-save" onClick={props.showhendel1} /> save</div>
    </div>)
  
  }
  export default BarquetteCreate;
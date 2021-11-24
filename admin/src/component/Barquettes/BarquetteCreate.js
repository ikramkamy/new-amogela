import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';



const BarquetteCreate=(props)=>{
  const {showhendel1}=props;
  const [formData, setFormData] = useState('');
  const[files,setFiles]=useState([]);
    const [barquette,setBarquette]=useState(
      {  name:"",
         quantite:"",
         disponible:"",
         prix:"",
         img:""
    });
    const handelchange=(event)=>{
      const {name,value}=event.target;
        setBarquette(prevInput=>{
              return  { 
                ...prevInput,
                [name]:value }
            })
          }
          // Upload image
    const upload = ({ target: { files } }) => {
  alert("we are uploading")
      let data = new FormData();
      data.append('img', files[0]);
      data.append('name',barquette.name);
      data.append('disponible',barquette.disponible);
      data.append('prix',barquette.prix);
      setFormData(data);
      console.log("form data",formData)
      /*
      data.append('prix', barquette.prix);
      data.append('disponible', barquette.disponible);
      data.append('name', barquette.name);
      setFormData(data);
    */
    };
    const create=()=>{
        axios.post(`/api/addbarquette`,formData)
        .then(setBarquette({
          name:"",
          img:"" ,
          quantite:"",
          disponible:"",
          prix:"",         
})).catch((err) => {
          console.log(err.response);
        })
       
        showhendel1();
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
   <input type="file" 
     className='custom-file-input'
     id='inputGroupFile04'
     aria-describedby='inputGroupFileAddon04'
   name="img"  onChange={upload} 
   style={{marginTop:"50px"}}/>
   
   </div>
   <div className="save-btn" onClick={create} >
     {/*<FaPlus className="icon-save" onClick={props.showhendel1}/>*/} Créer</div>
    </div>)
  
  }
  export default BarquetteCreate;
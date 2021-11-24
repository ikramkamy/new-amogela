import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';



const PhotoCreate=(props)=>{
  const {showhendel1}=props;
  const[files,setFiles]=useState([]);
  const [formData, setFormData] = useState('');
    const [photo,setPhoto]=useState(
      {    
        name:"",
        page:"",
        img:"",
        
     }
);

 // Upload image
 const upload = ({ target: { files } }) => {
  
  let data = new FormData();
  data.append('img', files[0]);
  data.append('name', files[0].name);
  data.append('page', photo.page);
  setFormData(data);
  console.log("form data",formData)
};

  
  const create=()=>{
    
  axios.post(`/api/photoPages`,formData).then(setPhoto({
            name:"",
            img:""            
})).catch((err) => {
            console.log(err.response);
          })
          
        }

    const handelchange=(event)=>{
        const {name,value}=event.target;
        setPhoto(prevInput=>{
                return  { 
                  ...prevInput,
                  [name]:value }
              })
              console.log("PHOTO",photo)
            }
            
   return( <div className="Edite">

   <div className="close" onClick={props.showhendel1}>&times;</div>
   <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
   
   <div className="Edit-fields">
   
   
   <form></form>
  
   <select data-id="domain-switcher" onChange={handelchange} value={photo.page} type="text" name="page" >
   <option label="selectioner" value="selectioner"></option>
            <option label="home01" value="home01"></option>
            <option label="home02" value="home02"></option>
            <option label="home03" value="home03"></option>
            <option label="histoire01" value="histoire01"></option>
            <option label="histoire02" value="histoire02"></option>
            <option label="histoire03" value="histoire03"></option>
            <option label="glaces-et-sorbet01" value="glaces-et-sorbet01"></option>
            <option label="glaces-et-sorbet02" value="glaces-et-sorbet02"></option>
            <option label="glaces-et-sorbet03" value="glaces-et-sorbet03"></option>
            <option label="glaces-et-sorbet04" value="glaces-et-sorbet04"></option>
            <option label="glaces-et-sorbet05" value="glaces-et-sorbet05"></option>
            <option label="chocolat01" value="chocolat01"></option>
            <option label="chocolat02" value="chocolat02"></option>
            <option label="chocolat03" value="chocolat03"></option>
            <option label="consulting" value="consulting"></option>
  </select>
   
   
   <input type="file" 
     className='custom-file-input'
     id='inputGroupFile04'
     aria-describedby='inputGroupFileAddon04'
   name="img"  onChange={upload} 
   style={{marginTop:"50px"}}/>
   
   </div>
   <div className="save-btn" onClick={create} >Ajouter</div>
    </div>)
  
  }
  export default PhotoCreate;
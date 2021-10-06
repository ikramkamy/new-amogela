import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import FileBase64 from 'react-file-base64';


const PhotoCreate=(props)=>{
  const {showhendel1}=props;
  const[files,setFiles]=useState([]);
    const [photo,setPhoto]=useState(
      {    
        name:"",
        img:"",
        
     }
);
  
  
  const create=()=>{
        
        const expensesListResp = async () => {
          alert("WE ARE CREATING")
      
          await axios.post(`/api/photoPages`,{img:photo.img,name:photo.name})
          .then(setPhoto({
            name:"",
           
            img:""            

          }))
       }
        expensesListResp();
        showhendel1();
      }
     
      const handelchange=(event)=>{
        const {name,value}=event.target;
        setPhoto(prevInput=>{
                return  { 
                  ...prevInput,
                  [name]:value }
              })
            }
            console.log("PHOTO",photo)
   return( <div className="Edite">

   <div className="close" onClick={props.showhendel1}>&times;</div>
   <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
   
   <div className="Edit-fields">
   
   
   
   <input placeholder="La page" name="name" onChange={handelchange} value={photo.name}/>
   <input type="file" name="img" onChange={handelchange} value={photo.img} style={{marginTop:"50px"}}/>
   
   </div>
   <div className="save-btn" onClick={create} ><FaPlus className="icon-save" onClick={props.showhendel1} /> Ajouter</div>
    </div>)
  
  }
  export default PhotoCreate;
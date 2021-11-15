import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const PhotoEdite=(props)=>{
  const {showhendel2}=props;
  const[files,setFiles]=useState([]);
  let {_id}=useParams();
  const [formData, setFormData] = useState('');
    const [photo,setPhoto]=useState(
      {    
        name:"",
        img:"",
        
     }
);


// Upload image
const upload = ({ target: { files } }) => {

let data = new FormData();
data.append('img', files[0]);
data.append('name', files[0].name);

setFormData(data);
console.log("form data",formData)
};


const update=(e)=>{
  alert("Voulez-vous changer la photo ?");
      
axios.post(`/update/${_id}`,formData).then(setPhoto({
        name:"",
        img:""            
})).catch((err) => {
        console.log(err.response);
      })
      showhendel2();
    }


  
   return(<div className="Edite">

   <div className="close" onClick={showhendel2}>&times;</div>
   <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
   
   <div className="Edit-fields">
   
   
   <input type="file" name="name" onChange={upload}  style={{marginTop:"50px"}}/>
   
   </div>
   <div className="save-btn" onClick={update}>Modifier</div>
    </div>)
  
  }
  export default PhotoEdite;
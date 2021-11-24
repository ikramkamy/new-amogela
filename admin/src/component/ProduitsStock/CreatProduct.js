import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import './produits.css';


const ProduitCreate=(props)=>{
  const[files,setFiles]=useState([]);
  const [formData, setFormData] = useState('');
  const {showhendel1}=props;
    const [produits,setProduits]=useState(
      {  name:"",
        quantite:"",
        disponible:"",
        prix:"",
        cathegorie:"",
        pname:"",
        img:"",
      }
);
// Upload image
const upload = ({ target: { files } }) => {
  
  let data = new FormData();
  data.append('img', files[0]);
  data.append('pname', files[0].name);
  data.append('name',produits.name);
  data.append('cathegorie',produits.cathegorie);
  data.append('disponible',produits.disponible);
  data.append('prix', produits.prix);
  setFormData(data);
 
};
console.log("image name",produits.pname);
console.log("form data",formData);
    const create=()=>{
      console.log("form data",formData);
     
        const expensesListResp = async () => {
          await axios.post(`/addproduits`,formData)
          .then(response =>console.log("response ",response))
       }
        expensesListResp();
        showhendel1();
      }
     
      const handelchange=(event)=>{
        const {name,value}=event.target;
        setProduits(prevInput=>{
                return  { 
                  ...prevInput,
                  [name]:value }
              })
            }
   return( <div className="Edite">

   <div className="close" onClick={props.showhendel1}>&times;</div>
   <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
   
   <div className="Edit-fields">
   
  
   
   <input placeholder=" le produit" name="name" onChange={handelchange} value={produits.name}/>
   
 

   <select data-id="domain-switcher" onChange={handelchange} value={produits.cathegorie} type="text" name="cathegorie" >
   <option label="selectioner" value="selectioner"></option>
            <option label="chocolat-confiserie" value="chocolat-confiserie"></option>
            <option label="entremets-glace" value="entremets-glace"></option>
            <option label="Escimau-biscuit" value="Escimau-biscuit"></option>
  </select>
 
   <input placeholder="Prix" name="prix" onChange={handelchange} value={produits.prix}/>
   
   
   <select  onChange={handelchange} value={produits.disponible} type="text" name="disponible"s >
    <option label="selectioner" value="selectioner"></option>
            <option label="disponible" value="disponible"></option>
            <option label="non disponible" value="non disponible"></option>
   </select>
   
   <input type="file" 
     className="input-img" placeholder="image" 
     name="pimg" onChange={upload} />
   
   </div>
   <div className="save-btn" onClick={create} > Créer</div>
    </div>)
  
  }
  export default ProduitCreate;
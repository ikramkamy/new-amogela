import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import './produits.css';


const ProduitCreate=(props)=>{

  const {showhendel1}=props;
    const [produits,setProduits]=useState(
      {  name:"",
        quantite:"",
        disponible:"",
        prix:"",
        cathegorie:"",
        img:"",
      }
);
    const create=()=>{
        
        const expensesListResp = async () => {
          await axios.post(`/addproduits`,produits)
          .then(response =>setProduits(response.data))
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
   <input placeholder="Disponible sur stock?" name="disponible" onChange={handelchange} value={produits.disponible}/>
   <input type="file"   className="input-img" placeholder="image" name="img" onChange={handelchange} value={produits.img}/>
   
   </div>
   <div className="save-btn" onClick={create} > Créer</div>
    </div>)
  
  }
  export default ProduitCreate;
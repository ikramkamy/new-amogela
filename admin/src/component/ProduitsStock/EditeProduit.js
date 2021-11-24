import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen,FaSave} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import useForceUpdate from 'use-force-update';
const EditeProduit=(props)=>{
const forceUpdate = useForceUpdate();
let {_id}=useParams();
const [produit,setProduit]=useState([]);
const {showhendel}=props; 
  useEffect(() => {
const expensesListResp = async () => {
      await axios.get(`/getproduitByID/${_id}`)
      .then(response =>{
        console.log("response",response.data);
       setProduit(response.data);
       /*updates.name=produit.name;*/
        forceUpdate();
        })
   }
    expensesListResp();
  },[]);
  const[updates,setUpdates]=useState({
    _id:_id,
    name:"",
    prix:"",
    disponible:"",
    cathegorie:"",
    img:"",
   });

 useEffect(()=>{
  console.log("produit",produit)
  setUpdates({
    name:produit.name,
    prix:produit.prix,
})
},[produit])

const handelchange=(event)=>{
const {name,value}=event.target;
      setUpdates(prevInput=>{
        return  { 
          ...prevInput,
          [name]:value }
      })
    }
    const update=()=>{
       axios.post(`/updateProduitSS/${_id}`,{
          _id:"",
          name:updates.name,
          prix:updates.prix,
         disponible:updates.disponible,
         cathegorie:updates.cathegorie,
         img:updates.img,
         
        })
    .then(setUpdates({
          name:"",
          _id:"",
          prix:"",
          disponible:"",
          img:"",
        })
    ) 
    showhendel();
    }
return(
    <div className="Edite">
    <div className="close" onClick={props.showhendel}>&times;</div>
    <img src="/images/logoamo.png" className="logo-sign" alt='logo'/>
    
    <div className="Edit-fields">
    <input placeholder="Produit" name="name"   onChange={handelchange} value={updates.name} required={true}/>
    <input placeholder="Prix" name="prix" onChange={handelchange} value={updates.prix} required/>
    <select  onChange={handelchange} value={updates.cathegorie} type="text" name="cathegorie" >
   <option label="selectioner" value="selectioner"></option>
            <option label="chocolat-confiserie" value="chocolat-confiserie"></option>
            <option label="entremets-glace" value="entremets-glace"></option>
            <option label="Escimau-biscuit" value="Escimau-biscuit"></option>
  </select>
   <select  onChange={handelchange} value={updates.disponible} type="text" name="disponible"s >
    <option label="selectioner" value="selectioner"></option>
            <option label="disponible" value="disponible"></option>
            <option label="non disponible" value="non disponible"></option>
   </select>
   
  {/* <input type="file" 
    className="input-img"  placeholder="image" 
    name="img" onChange={handelchange} />*/}
    </div>
    <div className="save-btn" onClick={update} >Enregistrer</div>
</div>)
     }
export default EditeProduit;
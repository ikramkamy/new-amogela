import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import LivraisonList from './LivraisonList';
import axios from 'axios';
import {FaArrowDown, FaPlus} from "react-icons/fa";
import { useParams,useHistory } from 'react-router-dom';
import Pagination2 from './Pagination';
import './livraison.css';
const Livraison=(props)=>{
const [clickcom,setClickcom]=useState([]);
  let {_id}=useParams();
  const [currentPage,setCurrentPage]=useState(1);
  const [dataperpage,setDataperpage]=useState (20);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get("/getcommandeByType/Livraison")
      .then(response =>setClickcom(response.data))
   }
    expensesListResp();
    //console.log('Clique et retiré commandes sont ici')
    //console.log("clickcom", clickcom)
  },[clickcom]);

    const handelDelete=(elem)=>{
    //alert("vous etes sur que vous voulez supprimer cette commande !")
    axios.delete(`/clearCommande/${_id}`  ,)
   
      .then()
      console.log('we are deleting',elem._id)
      }

      /****************PAGINATION*****************/
      const indexOfLastPost=currentPage * dataperpage;
      const indexOfFirstPost=indexOfLastPost-dataperpage;
      const currentPost=clickcom.slice(indexOfFirstPost,indexOfLastPost);
      const paginate =(number)=> setCurrentPage(number);
return(
<div className="utilisateurs">
<div className="wrap-data">
 <div className="btn-create">
   
   <div><FaArrowDown className="icon-creat"/>Export</div>
  
   </div>
   <h1 className="title-pages-admin"> les commandes par livraison</h1>
  <div className="user_info">
  <div className="item-user  tit"style={{textAlign:"center"}}>Nom</div>      
  <div className="item-user tit" style={{textAlign:"center"}}>Télèphone</div>
  <div className="item-user tit" style={{textAlign:"center"}}>List d'achat</div>
  <div className="item-user tit" style={{textAlign:"center"}}>La date</div>
  <div className="item-user tit" style={{textAlign:"center"}}>L'heur</div>
  <div className="item-user tit" style={{textAlign:"center"}}>Le lieux</div>
  <div className="item-user tit" style={{textAlign:"center"}}> Montant(DA) </div>
  
  <div className="item-user tit" style={{textAlign:"center"}}>Supprimer</div>
  
  
  </div>

    
  {currentPost?.map((e)=><LivraisonList
  username={e.user[0].username} list="Voire" 
   phone={e.user[0].phone} 
   commandLieux={e.commandeType[0].commande.lieux}
   commandDate={e.commandeType[0].commande.date.split("T")[0]}
   commandheur={e.commandeType[0].commande.date.split("T")[1].split(".")[0]}
 email={e.user[0].email} 
     handelDelete={(()=>handelDelete(e))}
     product={e.cart.name}
     somme={e.somme}
     cart={e.cart}
     _id={e._id}
     user={e.user}
  />)}
  <Pagination2 
    dataperpage={dataperpage} 
    totaldata={clickcom.length} 
    paginate={paginate}/>
</div>
 </div>)
}
export default Livraison;
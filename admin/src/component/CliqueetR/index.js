import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import ClickList from './ClickList';
import './clique.css';
import axios from 'axios';
import {FaArrowDown, FaPlus} from "react-icons/fa";
import { useParams,useHistory } from 'react-router-dom';
import Pagination1 from './Pagination';
import { jsPDF } from "jspdf";
const CliqueetR=(props)=>{
const [clickcom,setClickcom]=useState([]);
  let {_id}=useParams();
  const [currentPage,setCurrentPage]=useState(1);
  const [dataperpage,setDataperpage]=useState (20);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get("/getcommandeByType/Emporté")
      .then(response =>setClickcom(response.data))
   }
    expensesListResp();
    //console.log('Clique et retiré commandes sont ici')
    //console.log("clickcom", clickcom)
  },[clickcom]);

    const handelDelete=(user)=>{
    axios.delete(`/clearCommande/${_id}`,)
    .then()
     
      }
/****************PAGINATION*****************/
const indexOfLastPost=currentPage * dataperpage;
const indexOfFirstPost=indexOfLastPost-dataperpage;
const currentPost=clickcom.slice(indexOfFirstPost,indexOfLastPost);
const paginate =(number)=> setCurrentPage(number);
/***********************************PDF GENERATION************************************/
const generatepdf=()=>{
  var doc= new jsPDF('portrait','pt', 'a3');
  /*
  doc.text(60,60,'Entreprise: Amogela');
  doc.text(60,40,'Télèphone:+2130.......');
  doc.text(60,20,'Email:email@gmail.com');
  doc.text(60,10,"liste");
  */
  doc.html(document.querySelector("#all"),{callback: function(pdf){pdf.save("liste.pdf")}})
  
  }
return(
<div className="utilisateurs" >
<div className="wrap-data">
 <div className="btn-create">
   
   <div>
     <FaArrowDown className="icon-creat" onClick={generatepdf}/>Export</div>
 
   </div>
   <h1 className="title-pages-admin"> les commandes Cliqué et Retiré</h1>
  <div className="user_info">
  <div className="item-user  tit" >Le client</div>      
  <div className="item-user tit" style={{textAlign:"center"}}>Télèphone</div>
  <div className="item-user tit" style={{textAlign:"center"}}>List d'achat</div>
  <div className="item-user tit" style={{textAlign:"center"}}> La date</div>
  <div className="item-user tit" style={{textAlign:"center"}}> L'heur</div>
  <div className="item-user tit" style={{textAlign:"center"}}> Montant(DA) </div>
  
  <div className="item-user tit" style={{textAlign:"center"}}>Supprimer</div>
  
  
  </div>

    
  {currentPost?.map((e)=><ClickList 
  username={e.user[0].username} list="Voire" 
 user={e.user}
   phone={e.user[0].phone} 
   commandDate={e.commandeType[0].commande.date.split("T")[0]}
   commandheur={e.commandeType[0].commande.date.split("T")[1].split(".")[0]}
     handelDelete={(()=>handelDelete(e))}
     product={e.cart.name}
     somme={e.somme}
     cart={e.cart}
     _id={e._id}
  />)}

<Pagination1 
    dataperpage={dataperpage} 
    totaldata={clickcom.length} 
    paginate={paginate}/>
</div>

 </div>)
}
export default CliqueetR;
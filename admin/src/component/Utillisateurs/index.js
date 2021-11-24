import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import axios from 'axios';
import './utilisateurs.css';
import Pagination from './Pagination';
import {FaArrowDown, FaPlus} from "react-icons/fa";
import { jsPDF } from "jspdf";
const Utilisateurs=(props)=>{
  const [users,setUsers]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [dataperpage,setDataperpage]=useState (15);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/utilisateurs`)
      .then(response =>setUsers(response.data))
   }
    expensesListResp();
  },[users]);
    //console.log("users", users)
    const handelDelete=(user)=>{
    axios.delete(`/api/utilisateurs/${user._id}`,)
      .then()
      }
const indexOfLastPost=currentPage * dataperpage;
const indexOfFirstPost=indexOfLastPost-dataperpage;
const currentPost=users.slice(indexOfFirstPost,indexOfLastPost);
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
doc.html(document.querySelector(".utilisateurs"),{callback: function(pdf){pdf.save("liste.pdf")}})

}
return(
<div className="utilisateurs" >
  <div className="wrap-data">
 <div className="btn-create" >
   <div ><FaPlus className="icon-creat" />Créer</div>
   <div><FaArrowDown className="icon-creat" onClick={generatepdf}/>Export</div>
   </div>
 
   <h1 className="title-pages-admin"> La liste des inscrits sur le site Amogela</h1>
  <div className="user_info">
  <div className="item-user tit">Nom utilisateurs</div>      
  <div className="item-user tit">Télèphone</div>
  
  <div className="item-user tit">Email</div>
  <div className="item-user tit">supprimer</div>


  </div>
    {currentPost?.map((e)=>
    <UserList username={e.username} 
    phone={e.phone}  email={e.email} 
    handelDelete={(()=>handelDelete(e))}/>)}
   
    <Pagination 
    dataperpage={dataperpage} 
    totaldata={users.length} 
    paginate={paginate}/>
 
    </div>
 </div>)
}
export default Utilisateurs;
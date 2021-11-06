import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import axios from 'axios';
import './utilisateurs.css';
import {FaArrowDown, FaPlus} from "react-icons/fa";
const Utilisateurs=(props)=>{
  const [users,setUsers]=useState([]);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/utilisateurs`)
      .then(response =>setUsers(response.data))
   }
    expensesListResp();
  },[]);
    console.log("users", users)
    const handelDelete=(user)=>{
    axios.delete(`/api/utilisateurs/${user._id}`,)
      .then()
      }


return(
<div className="utilisateurs">
  <div className="wrap-data">
 <div className="btn-create">
   <div ><FaPlus className="icon-creat"/>Créer</div>
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
  <div className="user_info">
  <div className="item-user">Nom utilisateurs</div>      
  <div className="item-user">Télèphone</div>
  
  <div className="item-user">Email</div>
  <div className="item-user">Modifie</div>


  </div>
    {users?.map((e)=><UserList username={e.username} phone={e.phone}  email={e.email} handelDelete={(()=>handelDelete(e))}/>)}
    
    </div>
 </div>)
}
export default Utilisateurs;
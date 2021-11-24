import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
import ConsultList from './ConsultList';
import './consult.css';
import Pagination3 from './Pagination';
const Consult=(props)=>{
  const [consult,setConsult]=useState([]);
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [dataperpage,setDataperpage]=useState (20);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/consult`)
      .then(response =>setConsult(response.data))
   }
    expensesListResp();
  },[consult]);
    console.log("Gout", consult)
    const handelDelete=(user)=>{
    axios.delete(`/consult/${user._id}`,)
      .then()
      }
  /****************PAGINATION*****************/
  const indexOfLastPost=currentPage * dataperpage;
  const indexOfFirstPost=indexOfLastPost-dataperpage;
  const currentPost=consult.slice(indexOfFirstPost,indexOfLastPost);
  const paginate =(number)=> setCurrentPage(number);

return(
<div className="utilisateurs">
<div className="wrap-data">
<div className="btn-create">
  {/*<div ><FaPlus className="icon-creat" onClick={(()=>setShow1(true))}/>Créer</div>*/}
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
   <h1 className="title-pages-admin"> la liste des commandes professionnelles/Consulting</h1>
<div className="tableau">
    
<div className="item-user tit titf ">Nom</div>
<div className="item-user tit titf ">Entreprise</div>
<div className="item-user  tit titf">Télèphone</div>
<div className="item-user tit text-center">Email</div>
<div className="item-user tit text-center">Message</div>

<div className="item-user "></div>
</div>

{currentPost?.map((e)=><ConsultList name={e.name} _id={e._id} text={e.text}  phone={e.phone}  email={e.email} entreprise={e.entreprise}  show={(()=>setShow(true) )} handelDelete={(()=>handelDelete(e))}/>)}
<Pagination3
    dataperpage={dataperpage} 
    totaldata={consult.length} 
    paginate={paginate}/>

</div> 
</div>)}
export default Consult;
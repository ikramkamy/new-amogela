import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
import { paginate } from 'mongoose-paginate-v2';
const Pagination3=({dataperpage,totaldata,paginate})=>{
 const pageNumbers=[];
  for(let i=1; i<= Math.ceil(totaldata /dataperpage) ; i++){
    pageNumbers.push(i);
  }


return(
<div className="pagination">
{ pageNumbers?.map((number)=>
    <li key={number} className="page-item">
  <div className="page-link" onClick={()=>paginate(number)}>
      {number}
   </div>
   </li>
)}
 </div>)}
export default Pagination3;
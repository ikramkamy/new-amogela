import React from 'react';
import './shopingcart.css';
import { Link } from 'react-router-dom';
import { FaPlus, FaTrash ,FaMinus} from "react-icons/fa";

const Cart=(props)=>{
    const {addproduct,deletitem, Deletitem,Minesone}=props;

    return(
     
      <div className="table-cart">
<div className="cart-item">
<img src={props.img} style={{width:"100px",height:"100px"}}/>
<div className="info-tag">
<div style={{fontSize:"1.3em",color:"#12705e",fontWeight:"700"}}>{props.sname}</div>
<div style={{display:"flex",width:"150px",justifyContent:"space-between",alignItems:"center",color:"#12705e",cursor:"pointer"}}>Quantité:<FaMinus onClick={Minesone} style={{color:"#12705e"}}/>{props.squantity}<FaPlus onClick={addproduct} style={{color:"#12705e",cursor:"pointer"}}/></div>
<div onClick={deletitem}style={{color:"red"}} onClick={Deletitem}><FaTrash onClick={Deletitem} style={{color:"red",cursor:"pointer"}} />Supprimer</div>
</div>
<div className="gout-list">
    
    {props.gout1}<br/>
    {props.gout2}<br/>
    {props.gout3}<br/>
    {props.gout4}<br/>
    {props.gout5}<br/>
    {props.gout6}<br/>
    </div>
<div className="price-tag">{props.sprice}</div>
</div>


</div>


    )
}
export default Cart;
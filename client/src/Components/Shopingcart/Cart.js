import React from 'react';
import './shopingcart.css';
import { Link } from 'react-router-dom';
const Cart=(props)=>{
    const {addproduct,removeproduct}=props;

    return(
     
      <div className="table-cart">
<div className="cart-item">{props.sname}</div>
<div className="cart-item">{props.sprice}</div>
<div className="cart-item">
    
    {props.gout1}<br/>
    {props.gout2}<br/>
    {props.gout3}<br/>
    {props.gout4}<br/>
    
    
    
    
    </div>
<div className="cart-item">{props.squantity}</div>
</div>


    )
}
export default Cart;
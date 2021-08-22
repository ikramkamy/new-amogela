import React from 'react';
import './shopingcart.css';
const ShopinCart=(props)=>{
    const {addproduct,removeproduct}=props;

    return(<div className="show">
{props.key}
<div>{props.sname}</div>
<div>{props.squantity}</div>
<div>{props.sprice}</div>
<button  onClick = {addproduct}   variant="contained" color="secondary">
            Ajouter au panier
</button>



    </div>)
}
export default ShopinCart;
const cartModel=require("../models/cartModel");


exports.addItemtoCart =(req,res)=>{
cartModel.findOne({user: req.user._id}).exec((error,cart)=>{
if(error) return res.status(400).json({error});
if(cart) {
    console.log(cart);
cartModel.findOneAndUpdate({user: req.user._id},{
        '$push':{'cartItems':req.body.cartItems}
       
    });
}else{
    const cart=new cartModel({
    user: req.user._id,
    cartItems:[req.body.cartItems],
    
    });
    cart.save((error,cart)=>{
    if(error) return res.status(400).json({error});
    if(cart) return res.status(201).json({cart})
    
    })
    }

 })   
}
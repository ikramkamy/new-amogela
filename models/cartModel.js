const mongoose=require('mongoose');
const CartSchema= new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'simple_users',
    //required:true,
},
cartItems:[{
product:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:'Produits-sur-stocks',
    required:true,

},
quantite:{
    type:Number,
    defaulte:1,
    
},
price:{
    type:Number,
    required:true,
}


}]

},{timestamp:true})


const CartkModel=mongoose.model('Cart',CartSchema);
module.exports=CartkModel; 
 



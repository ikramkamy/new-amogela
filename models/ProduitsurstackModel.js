const mongoose = require("mongoose");
const ProduitsurStockSchema =new mongoose.Schema(
    {
name:{
    type:String,
   

},
quantite: {
    type:Number,
    
},
gout: {
    type:Object,
    
},
prix:{
type:String,
},
img: { 
    type:String,
    default:'/images/3.jpg',
 }




    }
)
const ProduitsurStockModel=mongoose.model('Produits-sur-stocks',ProduitsurStockSchema);
module.exports=ProduitsurStockModel; 
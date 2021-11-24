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
    type:String,
    
},
prix:{
type:String,
},
img: { 
    type:String,

 },
 cathegorie: {
     
    type:String,
},
pathname: {
     
    type:String,
},
disponible:{
    type:String,
    default:'disponible',
}




    }
)
const ProduitsurStockModel=mongoose.model('Produits-sur-stocks',ProduitsurStockSchema);
module.exports=ProduitsurStockModel; 
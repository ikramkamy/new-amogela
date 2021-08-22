const mongoose = require("mongoose");
const BarquetteSchema =new mongoose.Schema(
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
type:Number,
},
img: { 
    type:String,
    default:'/images/2.jpg',
 },
 
     cathegorie:{
type:String,
default:'Barquette',

     }
 





    }
)
const BarquetteModel=mongoose.model('Barquettes',BarquetteSchema);
module.exports=BarquetteModel; 
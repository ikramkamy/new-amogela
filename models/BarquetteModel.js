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
type:String,
},
img: { 
    type:String,
    default:'/images/2.jpg',
 }




    }
)
const BarquetteModel=mongoose.model('Barquettes',BarquetteSchema);
module.exports=BarquetteModel; 
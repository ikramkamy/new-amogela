const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/amogela",{

    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err)=>{
if(err)
console.log("ERROR IN CONNECTION WITH SERVER IS",err)
else 
console.log("tout est bien base de de donnée connectée pour amogela")
})
module.exports=mongoose.connection;
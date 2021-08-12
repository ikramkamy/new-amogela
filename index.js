const express = require("express");
const debug = require("debug")("server")
const app = express();
const db=require('./config/db');
const env=require('dotenv');
const cors=require('cors');
const morgan=require('morgan');
const bodyParser = require("body-parser");
const userRoutes=require('./routes/userRoute');
const adminRoutes=require('./routes/adminRoutes');
const clickretireRoute=require('./routes/clickretireRoutes');
const BarquetteRoutes=require('./routes/BarquetteRoutes');
const produitRoutes=require('./routes/produitsRoutes');
app.use(express.json())



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cors());
app.use(morgan("combined"));
  
app.get('/all',(req,res)=>{
res.send('hello amogela')
})
app.use(userRoutes);
app.use(adminRoutes);
app.use(clickretireRoute);
app.use(BarquetteRoutes);
app.use(produitRoutes);
env.config();
app.listen(process.env.PORT,() =>{
console.log(`server amogela is running on port ${process.env.PORT}`)
})

//l'architecture mvc 
// creer un dossier models
//creer un fichier qui représente une entité 'users'
//on appel le fichier hada "nomde l'entite+nom de dossier"

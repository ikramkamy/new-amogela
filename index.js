const express = require("express");
const app = express();
const db=require('./config/db');
const env=require('dotenv');
//const CommandRouter=require('./Routes/commandRoute')
//const ArticlRouter=require('./Routes/articlRoutes')

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const userRoutes=require('./routes/userRoute');
const adminRoutes=require('./routes/adminRoutes');
app.use(userRoutes);
app.use(adminRoutes);
//app.use(CommandRouter);

//app.use(ArticlRouter);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/all',(req,res)=>{
res.send('hello amogela')
})
env.config();
app.listen(process.env.PORT,() =>{
console.log("server amogela is running on port 3001")
})

//l'architecture mvc 
// creer un dossier models
//creer un fichier qui représente une entité 'users'
//on appel le fichier hada "nomde l'entite+nom de dossier"

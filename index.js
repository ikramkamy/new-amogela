const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const debug = require("debug")("server")

const db=require('./config/db');
const env=require('dotenv');
const cors=require('cors');
const morgan=require('morgan');
const contentRangeHook = require('./hooks/contentrangeHook');


const userRoutes=require('./routes/userRoute');
const adminRoutes=require('./routes/adminRoutes');
const clickretireRoute=require('./routes/clickretireRoutes');
const BarquetteRoutes=require('./routes/BarquetteRoutes');
const produitRoutes=require('./routes/produitsRoutes');
const cartRoutes=require('./routes/cartRoutes');
const NoteRoutes=require('./routes/NoteRoutes');
const GoutRoutes=require('./routes/GoutRoutes');
const contentrangeHook = require("./hooks/contentrangeHook");
const { countDocuments } = require("./models/userModel");
app.use(bodyParser.json())


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    /*
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Range');
    res.set('Content-Range, 0-9/9');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Expose-Headers', 'page-size')
    res.set('page-size', 20);
*/
  
    next();
  });
  
  app.use(cors());
app.use(morgan("combined"));

app.get('/all',(req,res)=>{
res.send('hello amogela')
res.header("Access-Control-Expose-Headers", "Authorization" ,"*")
res.header('Access-Control-Expose-Headers', 'Content-Range')
res.header('Access-Control-Expose-Headers', 'Content-Range,notes  0-9/9')

})
app.use(userRoutes);
app.use(adminRoutes);
app.use(clickretireRoute);
app.use(BarquetteRoutes);
app.use(produitRoutes);
app.use(cartRoutes);
app.use(NoteRoutes);
app.use(GoutRoutes);

env.config();
app.listen(process.env.PORT,() =>{
console.log(`server amogela is running on port ${process.env.PORT}`)
})

//l'architecture mvc 
// creer un dossier models
//creer un fichier qui représente une entité 'users'
//on appel le fichier hada "nomde l'entite+nom de dossier"

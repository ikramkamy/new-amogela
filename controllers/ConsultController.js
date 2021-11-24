
const Consult = require('../models/ConsultModel');

//# create a note
exports.create =  (req, res) => {

   console.log('ROUTE SUCCEED')
   const consult=new  Consult ({
    text:req.body.text,
    name:req.body.name,
    fname:req.body.fname,
    entreprise:req.body.entreprise,
    phone:req.body.phone,
    email:req.body.email,
});
consult.save((error, consult)=>{
   if (error) {
     
       return res.status(400).json({
         message: (error),
       });
     }
     if (consult) {
       
       const {text,name,phone,email,entreprise,fname} = consult;
       return res.status(201).json({
         
         note: {text,name,fname,phone,email,entreprise},
       });
     } 
})
}
exports.getConsulting =(req,res)=>{
Consult .find().then((data) => {
  /*
res.header('Access-Control-Expose-Headers', 'Content-Range')
res.header("Content-Range", `notes 1-9/9`);
*/
  res.json(data)
  console.log("FETCH SUCCED")
  })
  .catch((err) => {
    console.log("FETCH FAILED",err)
    res.json({
      err: err,
      message: "Une erreur c'est produite",
    });
  });
}

//#update a note

exports.Delete=(req,res)=>{
    Consult.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
      if (err) {
          console.log("Something wrong when DELETING data!");
      }
  
      console.log(doc);
      return res.status(201).json({
        message: ' Gout DELETED '
    })
  });
  
  
  
  }
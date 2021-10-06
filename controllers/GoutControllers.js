const Gout= require('../models/Gout');
const mongoosePaginate = require('mongoose-paginate-v2');
 
  //# create a note
exports.creategout =  (req, res) => {
  
     console.log('ROUTE SUCCEED')
     const gout=new  Gout({
      name:req.body.name,
     disponible:req.body.disponible
    
    
 });
 
 gout.save((error, gout)=>{
     if (error) {
       
         return res.status(400).json({
           message: (error),
         });
       }
       if (gout) {
         
         const {name, disponible} = gout;
         return res.status(201).json({
           
           gout: {name, disponible},
         });
       } 
 })
  }
exports.getgouts =(req,res)=>{
 Gout.find().then((data) => {
  res.header('Access-Control-Expose-Headers', 'Content-Range')
  res.header("Content-Range", `gouts 1-7/7`);
    res.json(data)
    console.log("FETCH GOUT SUCCED")
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
 exports.EditGout= (req, res) => {
      const noteId = req.params._id;
      const name = req.body.name;
      Gout.findByIdAndUpdate({ _id:req.params._id},{
        name:req.body.name,
        disponible:req.body.disponible,
      }
      ).then(console.log("OPERATION SUCCES"))

        
     // const goutToUpdate =  Gout.findById(noteId).then()
     // res.code(200).send({ data: goutToUpdate })
     
          .catch((err) => {
            console.log("UPDATE FAILED",err)
            res.json({
              err: err,
              message: "Une erreur c'est produite",
            });
          });
    
  }


exports.Delete=(req,res)=>{
  Gout.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
    if (err) {
        console.log("Something wrong when DELETING data!");
    }

    console.log(doc);
    return res.status(201).json({
      message: ' Gout DELETED '
  })
});



}











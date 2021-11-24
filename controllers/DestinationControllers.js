const Destination= require('../models/DestinationModel');

 
  //# create a note
exports.createDestination =  (req, res) => {
      console.log('ROUTE SUCCEED')
     const destination=new  Destination({
      name:req.body.name,
      wilaya:req.body.wilaya,
     });
 
     destination.save((error, destination)=>{
        if (error) {
          
            return res.status(400).json({
              message: (error),
            });
          }
          if (destination) {
            
            const {name,wilaya} =  destination;
            return res.status(201).json({
              
               destination: {name,wilaya},
            });
          } 
    })
     }
     
exports.getdestination =(req,res)=>{
    Destination.find().then((data) => {
  /*
  res.header('Access-Control-Expose-Headers', 'Content-Range')
  res.header("Content-Range", `gouts 1-7/7`);
  */
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
 exports.EditDestination= (req, res) => {
    
      const name = req.body.name;
      Destination.findByIdAndUpdate({ _id:req.params._id},{
        name:req.body.name,
      
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
    Destination.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
    if (err) {
        console.log("Something wrong when DELETING data!");
    }
  console.log(doc);
    return res.status(201).json({
      message: ' Gout DELETED '
  })
});



}


exports.getbywilaya = (req,res) =>{
  Destination.find({"wilaya":req.params.wilaya}).then((data) => {
    res.json(data)
    })
    .catch((err) => {
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });
}

exports.getdetinationbyid =(req,res)=>{
  Destination.find({"_id":req.params._id}).then((data)=>{
    res.json(data)
  }).catch((err)=>{
    res.json({
      err:err,
      message:"une erreur s'est produite",
    })
  })

}






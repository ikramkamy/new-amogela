const PhotoPage= require('../models/PhotoPgages');

 
  //# create a note
exports.postPhoto =  (req, res) => {
  
     console.log('ROUTE SUCCEED')
     const photo=new PhotoPage({
      name:req.body.name,
      img:req.body.img,
      page:req.body.page
    
 });
 
 photo.save((error, photo)=>{
     if (error) {
       
         return res.status(400).json({
           message: (error),
         });
       }
       if (photo) {
         
         const {name,img,page} = photo;
         return res.status(201).json({
           
            photo: {name,img,page},
         });
       } 
 })
  }




  exports.getimages= (req,res)=>{
    PhotoPage.find().then((data) => {
      
        res.json(data)
        console.log("FETCH Photoss SUCCED")
        })
        .catch((err) => {
          console.log("FETCH FAILED",err)
          res.json({
            err: err,
            message: "Une erreur c'est produite",
          });
        });


  }
  exports.deletephoto=(req,res)=>{

    PhotoPage.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
      if (err) {
          console.log("Something wrong when DELETING data!");
      }
  
      console.log(doc);
      return res.status(201).json({
        message: ' photo DELETED '
    })
  });
  }
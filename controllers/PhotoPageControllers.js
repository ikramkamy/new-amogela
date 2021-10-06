const PhotoPage= require('../models/PhotoPgages');

 
  //# create a note
exports.postPhoto =  (req, res) => {
  
     console.log('ROUTE SUCCEED')
     const photo=new PhotoPage({
      name:req.body.name,
      img:req.body.img
    
    
 });
 
 photo.save((error, photo)=>{
     if (error) {
       
         return res.status(400).json({
           message: (error),
         });
       }
       if (photo) {
         
         const {name,img} = photo;
         return res.status(201).json({
           
            photo: {name,img},
         });
       } 
 })
  }
  exports.getimages=(req,res)=>{
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
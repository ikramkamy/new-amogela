const PhotoPage= require('../models/PhotoPgages');

 
  //# create a note
exports.postPhoto =  (req, res) => {
  
     console.log('ROUTE SUCCEED')
     const photo=new PhotoPage({
      name:req.body.name,
      id:req.body.id,
    
    
 });
 
 photo.save((error, photo)=>{
     if (error) {
       
         return res.status(400).json({
           message: (error),
         });
       }
       if (photo) {
         
         const {name,id} = photo;
         return res.status(201).json({
           
            photo: {name,id},
         });
       } 
 })
  }
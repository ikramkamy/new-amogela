const BarquetteModel=require('../models/BarquetteModel');
const multer=require('multer');
const mongoose = require('mongoose');
const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, './public/uploads/images');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});



exports.addBarquette=(req,res)=>{
 

const Barquette=new BarquetteModel({
     name:req.body.name,
    quantite:req.body.quantite,
    gout:req.body.gout,
    prix:req.body.prix,
   
});

Barquette.save((error, Barquette)=>{
    if (error) {
      
        return res.status(400).json({
          message: (error),
        });
      }
      if (Barquette) {
        
        const { name, quantite,prix } = Barquette;
        return res.status(201).json({
          
            barquette: {name, quantite,prix},
        });
      } 


})
}

exports.gettAllbarquette=(req,res)=>{
  BarquetteModel.find().then((data) => {
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    res.header("Content-Range", `barquettes 1-3/3`);
    res.json(data)
    })
    .catch((err) => {
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });



}
exports.getbarquettebyID=(req,res)=>{
BarquetteModel.findOne({"_id": req.params._id,},function (err,data) {
    if (err) {
        err.status = 406;
        return next(err);
    }
    console.log(data);
    return res.status(201).json({
        message: ' success.',data:data
    })
  })

}
exports.updateBarquette=(req,res)=>{
  console.log("WE ARE UPDATING HORAIRE")
  const _id=req.params.id;
 const name=req.body.name;
 const prix=req.body.prix;
 BarquetteModel.findByIdAndUpdate({_id:req.params._id},
  {
  name:req.body.name,
  prix:req.body.prix,
 disponible:req.body.disponible
}
      ).then((data)=>{
 const noteup={_id,name,prix}
       res.json(noteup)
       console.log("UPDATE SUCCED",noteup)
 })
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
exports.Filtercatégorie=(req,res)=>{
  BarquetteModel.find({"cathegorie": req.params.cathegorie,},function (err,data) {
    if (err) {
        err.status = 406;
        return next(err);
    }
    console.log(data);
    return res.status(201).json({
        message: ' success.',data:data
    })
})

}

exports.Delete=(req,res)=>{

  BarquetteModel.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
    if (err) {
        console.log("Something wrong when DELETING data!");
    }

    console.log(doc);
    return res.status(201).json({
      message: ' Barquette DELETED '
  })
});

}


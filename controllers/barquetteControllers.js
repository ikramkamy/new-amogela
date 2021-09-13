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

  BarquetteModel.findOneAndUpdate({img:"/images/5.png"},{img:"/images/2.jpg"}).then(function(){
    BarquetteModel.findOne({name: "Barquetes 750g "}).then(function(res){
      assert(res.img === '/images/2.jpg');
      done();
  });
  })

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
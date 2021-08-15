const produiSSModel=require('../models/ProduitsurstackModel');
const multer=require('multer');
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



exports.addproduit=(req,res)=>{
 

const produit=new  produiSSModel({
     name:req.body.name,
    quantite:req.body.quantite,
    gout:req.body.gout,
    prix:req.body.prix,

   
});

produit.save((error, produit)=>{
    if (error) {
      
        return res.status(400).json({
          message: (error),
        });
      }
      if (produit) {
        
        const { name, img,prix } = produit;
        return res.status(201).json({
          
          produit: {name, img,prix},
        });
      } 


})
}

exports.getproduit=(req,res)=>{
  produiSSModel.find().then((data) => {
    res.json(data)
    })
    .catch((err) => {
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });
}
exports.findbycategorie=(req,res)=>{
  produiSSModel.find({"cathegorie": req.params.cathegorie,},function (err,data) {
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

/*
exports.updateBarquette=(req,res)=>{

  BarquetteModel.findOneAndUpdate({img:"/images/5.png"},{img:"/images/2.jpg"}).then(function(){
    BarquetteModel.findOne({name: "Barquetes 750g "}).then(function(res){
      assert(res.img === '/images/2.jpg');
      done();
  });
  })


}
*/
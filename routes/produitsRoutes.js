const express=require('express');
const multer = require('multer');
const router=express.Router();
const path=require('path');
const produiSSModel=require('../models/ProduitsurstackModel');
const {addproduit,getproduit,findbycategorie,getproduitByID,Delete,updateProduitSS}=require('../controllers/produitSsController');

router.get('/findbycategorie/:cathegorie',findbycategorie)
router.get('/getproduitByID/:_id',getproduitByID)
router.delete('/deleteProduits/:_id',Delete);
router.post('/updateProduitSS/:_id',updateProduitSS);
router.get('/api/produitsStock',getproduit)


/*multer*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./public/uploads');
  },
     filename: function(req, file, cb) {
        cb(null, file.originalname);
      }
    });
    const fileFilter = (req, file, cb) => {
      // reject a file
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
      } else {
        cb(null, false);
      }
    };  
  
  
const upload = multer({storage :storage,

  fileFilter: fileFilter,
});
router.post('/addproduits',upload.single('img'), (req, res,next) => {
    const produit = new produiSSModel({
        name:req.body.name,
        pname:req.body.pname,
        quantite:req.body.quantite,
        gout:req.body.gout,
        prix:req.body.prix,
        cathegorie:req.body.cathegorie, 
        disponible:req.body.disponible,
        img: req.file.path
    });
    produit
      .save()
      .then(result => {
        console.log("responde frome posting an image",result);
        res.status(201).json({
          message: "Created product successfully",
          produit: {
              name: result.name,
              
              request: {
                  type: 'GET',
                  url: "http://localhost:3000/photos/" + result._id
              }
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
module.exports = router;
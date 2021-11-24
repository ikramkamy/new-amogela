const express=require('express');
const router=express.Router();
const multer = require('multer');
const BarquetteModel=require('../models/BarquetteModel');

/****************multer *****************/
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
  
const upload = multer({storage :storage });
  
const {addBarquette,gettAllbarquette,updateBarquette,getbarquettebyID,Filtercatégorie,Delete}=require('../controllers/barquetteControllers');


router.get('/api/Barquettes',gettAllbarquette);
router.post('/api/findOneAndUpdate/:_id',updateBarquette);
router.get('/getbarquettebyID/:_id',getbarquettebyID);
router.get('/cathegorie/:cathegorie',Filtercatégorie);
router.delete('/api/barquettes/:_id',Delete);



router.post('/api/addbarquette',upload.single('img'), (req, res,next) => {
    const barquette = new BarquetteModel({
      name: req.body.name,
      quantite:req.body.quantite,
      prix:req.body.prix,
      cathegorie:req.body.cathegorie, 
      disponible:req.body.disponible,
      img: req.file.path
    });
    barquette
      .save()
      .then(result => {
        console.log("responde frome posting an image",result);
        res.status(201).json({
          message: "Created product successfully",
          barquette: {
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
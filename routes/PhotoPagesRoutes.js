const express=require('express');
const router=express.Router();
const multer = require('multer');
const Photo=require('../models/PhotoPgages');
/********************old method ******************* */

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
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

const {postPhoto,getimages}=require('../controllers/PhotoPageControllers');

router.post('/api/photoPages', upload.single('img'), (req, res, next) => {
    const photo = new Photo({
      name: req.body.name,
      img: req.body.img
    });
    photo
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created product successfully",
          photo: {
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
  /*
  router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
      .select('name price _id productImage') 
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json({
              product: doc,
              request: {
                  type: 'GET',
                  url: 'http://localhost:3000/products'
              }
          });
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  })
router.get('/api/photoPages',getimages)
*/


module.exports = router;
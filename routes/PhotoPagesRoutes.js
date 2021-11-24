const express=require('express');
const router=express.Router();
const multer = require('multer');
const Photo=require('../models/PhotoPgages');
const path=require('path');
const {postPhoto,getimages,deletephoto}=require('../controllers/PhotoPageControllers');
/********************old method ******************* */

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
// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

  const upload = multer({storage :storage, fileFilter:fileFilter,});

/**  fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
          return callback(new Error('Only images are allowed'))
      }
      callback(null, true)
  }, */

router.post('/api/photoPages', upload.single('img'), (req, res,next) => {
    const photo = new Photo({
      name: req.body.name,
      page: req.body.page,
      img: req.file.path
    });
    photo
      .save()
      .then(result => {
        console.log("responde frome posting an image",result);
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



router.post('/update/:_id',upload.single('img'), (req, res,next) => {
  const photo = new Photo({
    name: req.body.name,
    img: req.file.path
  })
  Photo.findByIdAndUpdate({_id:req.params._id},{ name: req.body.name})

  
    /*photo .save() */
      .then(result => {
        console.log("responde frome posting an image",result);
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


router.get('/photos-pages',getimages);
router.delete("/supprimer/:_id",deletephoto);










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
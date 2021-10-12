const userModel=require('../models/userModel');
const product=require('../models/ProduitsurstackModel');
const bcrypt=require('bcrypt');
const shortid=require('shortid');
const jwt = require("jsonwebtoken");
const mongoosebcrypt=require('mongoose-bcrypt');

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
exports.signup = (req, res) => {
    //si un utilisateur déja a le mm email on bloquqe l'inscription par signaler une erreur400
    userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
         error: "User already registered",
        });
  
      const { firstName, lastName, email,phone, password ,username } = req.body;
      const salt = await bcrypt.genSalt(10);
     const  hash_password=  await bcrypt.hashSync( req.body.password, salt);

      const myuser = new userModel({
        firstName,
        lastName,
        email,
        phone,
        hash_password,
        username,
      });
  
      myuser.save((error, user) => {
        if (error) {

         // return console.log("somenthing is rong",error)
          return res.status(400).json({ 
            message: "Something went wrong",
           
          });
           
        }
  
        if (user) {
          const token = generateJwtToken(user._id, user.role);
          const { _id, firstName, lastName, email, role,phone, username } = user;
          return res.status(201).json({
            token,
            user: { _id, firstName, lastName, email, role,phone, username },
          });
        }
      });
    });



  }
  exports.getallusers=(req,res)=>{
      userModel.find().then((data) => {
        res.header('Access-Control-Expose-Headers', 'Content-Range')
        res.header("Content-Range", `simple_users 1-9/9`);
      res.json(data)
      })
      .catch((err) => {
        res.json({
          err: err,
          message: "une erreur c'est produite",
        });
      });
  }

  /*
exports.signin=(req,res)=>{
userModel.findOne({email: req.body.email}).exec(async (error, user) => {
  if (error)return res.status(400).json({ error});
  if(!user) return res.status(400).json({message:"we can't find this user try again"})
  let result= await user.authenticate(req.body.password).then(function(result){
    console.log(result);
    console.log(user);
    console.log("hash password is here",user.hash_password)
    console.log("password is here",req.body.password)
    var pass= bcrypt.hashSync(req.body.password,10)
    console.log("pass :",pass)
  }).then(function (result){return res.status(200).json({result}) })
  
  if(result){
   
    
      console.log("password correct");
      return res.status(200).json({message:'correct'})
      /*
       
      const token=generateJwtToken(user._id, user.role);
      console.log(result);
      const {firstName, lastName, email, role, fullName,password } = user;
          return res.status(201).json({
            token,
            user: {firstName, lastName, email, role, fullName,password },
            message:"password correct",
          });
            }else return res.statur(404).json({message:"error"})
})
}
          */
       
exports.signin = (req, res) => {
  userModel.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
      if (isPassword && user.role === "user") {
        // const token = jwt.sign(
        //   { _id: user._id, role: user.role },
        //   process.env.JWT_SECRET,
        //   { expiresIn: "1d" }
        // );
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role,phone, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role,phone, fullName },
        });
      } else {
        return res.status(400).json({
          message: "Pssword incorrect",
        });
      }
    } else {
      return res.status(400).json({ 
        
        message: "Something went wrong" 
      });
    }
  });
};

exports.requiresignin=(req,res,next)=>{
const token=(req.headers.authorization).split(" ")[1];
console.log(token)
const user=jwt.verify(token, process.env.JWT_SECRET);
req.user=user;
next()
}

exports.addToCartUser=(req, res)=>{
  userModel.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    console.log(userInfo)

    userInfo.cart.forEach((item) => {
        if (item.id == req.body.cart.id) {
            duplicate = true;
        }
    })


    if (duplicate) {
      userModel.findOneAndUpdate(
            { _id: req.user._id, "cart.id": req.body.cart.id },
            { $inc: { "cart.$.quantity": 1 } },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.cart)
            }
        )
    } else {
      userModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                $push: {
                    cart: {
                        id: req.body.cart.id,
                        name:req.body.cart.name,
                        img:req.body.cart.img,
	                      prix:req.body.cart.prix,
	                      gout1:req.body.cart.gout1,
	                      gout2:req.body.cart.gout2,
	                      gout3:req.body.cart.gout3,
	                      gout4:req.body.cart.gout4,
                        livraison:req.body.cart.livraison,
                        alger:req.body.cart.alger,
                        communeAlger:req.body.cart.communeAlger,
                        boumerdes:req.body.cart.boumerdes,
                        communeboumerdes:req.body.cart.communeboumerdes,
                        emporte:req.body.cart.emporte,
                        jour:req.body.cart.jour,
                        heur:req.body.cart.heur,
	                     
                       quantity: 1,
                        date: Date.now()
                    }
                }
            },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.cart)
            }
        )
    }
})
}

exports.getMycartUser=(req,res)=>{
  userModel.findOne({ "_id": req.params._id,}, (err, userInfo) => {

    console.log(userInfo)
}).then((data) => {
    res.json(data)
    console.log("data",data)
    })
    .catch((err) => {
      res.json({
        err: err,
        message: "une erreur c'est produite",
      });
    });
exports.getMycartUserprofile=(req,res)=>{
  userModel.findOne({"_id": req.params._id,},function (err,data) {
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

}
exports.addToCartUser2=(req, res)=>{
  userModel.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    console.log(userInfo)

    userInfo.cart.forEach((item) => {
        if (item.id == req.body.cart.id && item.gout1==req.body.cart.gout1 && item.gout2==req.body.cart.gout2 && item.gout3==req.body.cart.gout3 && item.gout4==req.body.cart.gout4) {
            duplicate = true;
        }
    })


    if (duplicate) {
      userModel.findOneAndUpdate(
            { _id: req.user._id, "cart.id": req.body.cart.id },
            { $inc: { "cart.$.quantity": 1 } },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.cart)
            }
        )
    } else {
      userModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                $push: {
                    cart: {
                        id: req.body.cart.id,
                        img:req.body.cart.img,
                        name:req.body.cart.name,
	                      prix:req.body.cart.prix,
	                      gout1:req.body.cart.gout1,
	                      gout2:req.body.cart.gout2,
	                      gout3:req.body.cart.gout3,
	                      gout4:req.body.cart.gout4,
	                     
                       quantity: 1,
                        date: Date.now()
                    }
                }
            },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.cart)
            }
        )
    }
})
}

exports.getMycartUser=(req,res)=>{
  userModel.findOne({ "_id": req.params._id,}, (err, userInfo) => {

    console.log(userInfo)
}).then((data) => {
    res.json(data)
    console.log("data",data)
    })
    .catch((err) => {
      res.json({
        err: err,
        message: "une erreur c'est produite",
      });
    });
exports.getMycartUserprofile=(req,res)=>{
  

  userModel.findOne({"_id": req.params._id,},function (err,data) {
    if (err) {
        err.status = 406;
        return next(err);
    }
    console.log(data);
    return res.status(201).json({
        message: 'success.',data:data
    })
  })
}

}
//this one removes all documets of this colection
/*
exports.Clearcard = function(req, res, next) {
  userModel.remove({}, function(err) {
          if (err) {
              console.log(err)
          } else {
              res.end('success');
          }
      }
  );
};
*/
//
exports.Clearcard=function(req,res,next){
  userModel.findOneAndUpdate({ "_id": req.params._id,}, {$set:{cart:[]}}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
    return res.status(201).json({
      message: ' CART DELETED '
  })
});
}


exports.DeletefromCartUser=(req, res)=>{

  userModel.findOneAndUpdate(
    { _id: req.user._id },
    {
        "$pull":
            { "cart": { "id": req.body.id } }
    },
    { new: true },
    (err, userInfo) => {
        let cart = userInfo.cart;
        let array = cart.map(item => {
            return item.id
        })

        product.find({ '_id': { $in: array } })
            .populate('writer')
            .exec((err, cartDetail) => {
                return res.status(200).json({
                    cartDetail,
                    cart
                })
            })
    }
)
}


exports.MinuOneItemCartUser=(req, res)=>{
  userModel.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    console.log(userInfo)

    userInfo.cart.forEach((item) => {
        if (item.id == req.body.cart.id && item.gout1==req.body.cart.gout1 && item.gout2==req.body.cart.gout2 && item.gout3==req.body.cart.gout3 && item.gout4==req.body.cart.gout4 && item.gout5==req.body.cart.gout5 && item.gout6==req.body.cart.gout6) {
            duplicate = true;
        }
    })


    if (duplicate) {
      userModel.findOneAndUpdate(
            { _id: req.user._id, "cart.id": req.body.cart.id },
            { $inc: { "cart.$.quantity": -1 } },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.cart)
            }
        )
    } else {
      userModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                $push: {
                    cart: {
                        id: req.body.cart.id,
                        img:req.body.cart.img,
                        name:req.body.cart.name,
	                      prix:req.body.cart.prix,
	                      gout1:req.body.cart.gout1,
	                      gout2:req.body.cart.gout2,
	                      gout3:req.body.cart.gout3,
	                      gout4:req.body.cart.gout4,
                        
	                     quantity: -1,
                        date: Date.now()
                    }
                }
            },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.cart)
            }
        )
    }
})
}

exports.Delete=(req,res)=>{

  userModel.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
    if (err) {
        console.log("Something wrong when DELETING data!");
    }

    console.log(doc);
    return res.status(201).json({
      message: ' CART DELETED '
  })
});

}


exports.DeleteType=(req,res)=>{
  userModel.findOneAndUpdate({ "_id": req.user._id,}, {$set:{commandeType:{}}}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
    return res.status(201).json({
      message: ' ComandeType DELETED '
  })
}); 
}

exports.addCommandetoCart=(req, res)=>{
  userModel.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    console.log(userInfo)


      
            duplicate = true;
       
   


    if (duplicate) {
      userModel.findOneAndUpdate(
            { _id: req.user._id },
            { commandeType: {
              commande:{
                command:req.body.commandeType.commande.command,
                  date:req.body.commandeType.commande.date,
              }
            } },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.commandeType)
            }
        )
    } else {
      userModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                $push: {
                  commandeType: {
                      commande:{
                        command:req.body.commandeType.commande.command,
                          date:req.body.commandeType.commande.date,
                      }
                    }
                }
            },
            { new: true },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo.commandeType)
            }
        )
    }
})
}

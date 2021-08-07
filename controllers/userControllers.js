const userModel=require('../models/userModel');
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
      const hash_password = await bcrypt.hash(password, 10);
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
      return res.status(400).json({ message: "Something went wrong" });
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
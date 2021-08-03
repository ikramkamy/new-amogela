const adminModel=require('../models/adminModel');
const bcrypt=require('bcrypt');
const shortid=require('shortid');
const jwt = require("jsonwebtoken");

const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
  };
exports.signupadmin = (req, res) => {
    //si un utilisateur déja a le mm email on bloquqe l'inscription par signaler une erreur400
    adminModel.findOne({ email: req.body.email }).exec(async (error, admin) => {
      if (admin)
        return res.status(400).json({
         error: "Admin already registered",
        });
  
      const { firstName, lastName, email, password  } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const myadmin = new adminModel({
        firstName,
        lastName,
        email,
        hash_password
      });
  
      myadmin.save((error, admin) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
  
        if (admin) {
          const token = generateJwtToken(admin._id, admin.role);
          const { _id, firstName, lastName, email, role, fullName } = admin;
          return res.status(201).json({

            token,
            admin: { _id, firstName, lastName, email, role, fullName},
          });
        }
      });
    });
}


exports.signinadmin=(req,res)=>{
    adminModel.findOne({email: req.body.email}).exec(async (error, admin) => {
      if (error)return res.status(400).json({ error});
      if(!admin) return res.status(400).json({message:"we can't find admin try again"})
      if(admin){
        if(admin.authenticate(req.body.password)){
          const token=generateJwtToken(admin._id, admin.role);
          const {firstName, lastName, email, role, fullName } = admin;
              return res.status(201).json({
                token,
                admin: {firstName, lastName, email, role, fullName },
              });
        }
      }else{
        return res.status(400).json({mmessage:`une erreur s'est produite`});
      }
    
    })
    
    }
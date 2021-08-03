const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken');
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },
    contactNumber: { type: String },
    pofilePicture: { type: String },
  },
  { timestamps: true }
);

// userSchema.virtual('password')
// .set(function(password){
//     this.hash_password = bcrypt.hashSync(password, 10);
// });

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
//cette méthode a pour but de crypté le mot de pass logiquement on aura besoin des deux 

{/*userSchema.virtual("password").set(function(password){
this.hash_password=bcrypt.hashSync(password);
})*/}

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};
/*-------------------------La creation du Token------------------------------*/ 
                      //cette methode est n'est pas appliquée//
userSchema.methods.createToken = async function(){
try{
let payload={
  username: this.username,
  role: this.role,
};

let token = await jwt.sign(payload,'thissecret');

return token;
} catch (error){
  return error;
}
};
/*---------------------------------------------------------------------------*/ 

userSchema.methodes={
  verifyPassword: async function (password){
    return await bcrypt.compare(password, this.hash_password);
  }
  
}
const userModel=mongoose.model('simple_users',userSchema);
module.exports=userModel;
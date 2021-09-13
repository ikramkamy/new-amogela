const clickRetireModel=require('../models/clickRetireModel');


exports.commander=(req,res)=>{

    const {cart ,user,time,somme,} = req.body;
    
    const command = new clickRetireModel({
    cart,
    user,
    time,
    somme,
    });

    command.save((error, command) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
  
        if (command) {
         
          const { cart,user} = command;
          return res.status(201).json({command:{ cart,user,time,somme},});
        }
      });
}
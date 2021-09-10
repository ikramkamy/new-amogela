const clickRetireModel=require('../models/clickRetireModel');


exports.commander=(req,res)=>{

    const {cart } = req.body;
    
    const command = new clickRetireModel({
    cart,
    });

    command.save((error, command) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
  
        if (command) {
         
          const { cart} = command;
          return res.status(201).json({command:{ cart},});
        }
      });
}
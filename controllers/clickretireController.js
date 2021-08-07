const clickRetireModel=require('../models/clickRetireModel');


exports.commander=(req,res)=>{

    const { gout1, gout2, gout3, gout4,quantite } = req.body;
    
    const command = new clickRetireModel({
      gout1,
      gout2,
      gout3,
      gout4,
      quantite
    });

    command.save((error, command) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
  
        if (command) {
         
          const { gout1, gout2, gout3, gout4,quantite} = command;
          return res.status(201).json({command:{ gout1, gout2, gout3, gout4,quantite},});
        }
      });
}
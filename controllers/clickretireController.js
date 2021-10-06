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
          console.log("WE HAVE ACCEEEEDED",command.user[0]._id)
        const userid= command.user[0]._id;
          return res.status(201).json({command:{ cart,user,time,somme,userid},});
        }
      });
}

exports.getcommandeByID=(req,res)=>{
clickRetireModel.find({"user._id":req.params._id,},function (err,data) {
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
  exports.getallcommands=(req,res)=>{
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    res.header("Content-Range", `gouts 1-9/9`);
    clickRetireModel.find().then((data) => {
      res.json(data)
      })
      .catch((err) => {
        res.json({
          err: err,
          message: "Une erreur c'est produite",
        });
      });
  }
  exports.getallcarts=(req,res)=>{
 
    clickRetireModel.find().then((data) => {
      let i=1;
      let j=0;
     
      res.json(data[i].cart[j].name)
      })
      .catch((err) => {
        res.json({
          err: err,
          message: "Une erreur c'est produite",
        });
      });
  }
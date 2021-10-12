const clickRetireModel=require('../models/clickRetireModel');


exports.commander=(req,res)=>{

    const {cart ,user,time,somme,commandeType} = req.body;
    
    const command = new clickRetireModel({
    cart,
    user,
    time,
    somme,
    commandeType,
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
          return res.status(201).json({command:{ cart,user,time,somme,userid,commandeType},});
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

  exports.getcommandeByType=(req,res)=>{
  
    clickRetireModel.find({"commandeType.commande.command":req.params.type}).then((data) => {
      res.json(data)
      })
      .catch((err) => {
        res.json({
          err: err,
          message: "Une erreur c'est produite",
        });
      });
    }


    exports.clearCommande=(req,res)=>{
      clickRetireModel.findOneAndDelete({ "_id": req.params._id}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
        return res.status(201).json({
          message: ' CART DELETED '
      })
    });



    }
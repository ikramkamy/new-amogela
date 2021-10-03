const Gout= require('../models/Gout');
const mongoosePaginate = require('mongoose-paginate-v2');
 
  //# create a note
exports.creategout =  (req, res) => {
  
     console.log('ROUTE SUCCEED')
     const gout=new  Gout({
      name:req.body.name,
      id:req.body.id,
    
    
 });
 
 gout.save((error, note)=>{
     if (error) {
       
         return res.status(400).json({
           message: (error),
         });
       }
       if (gout) {
         
         const {name,id} = gout;
         return res.status(201).json({
           
           gout: {name,id},
         });
       } 
 })
  }
exports.getgouts =(req,res)=>{
 Gout.find().then((data) => {
  res.header('Access-Control-Expose-Headers', 'Content-Range')
  res.header("Content-Range", `gouts 1-9/9`);
    res.json(data)
    console.log("FETCH GOUT SUCCED")
    })
    .catch((err) => {
      console.log("FETCH FAILED",err)
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });
}
 //#update a note
 exports.EditGout= (req, res) => {
      const noteId = req.body.id;
      const name = req.body.name;
      Gout.findByIdAndUpdate({ _id:req.body._id},{name:req.body.name}
         )
     // const goutToUpdate =  Gout.findById(noteId).then()
     // res.code(200).send({ data: goutToUpdate })
     
          .catch((err) => {
            console.log("UPDATE FAILED",err)
            res.json({
              err: err,
              message: "Une erreur c'est produite",
            });
          });
    
  }














  //#get the list of notes
  /*
  fetch: async (request, reply) => {
    try {
      const notes = await Note.find({});
      reply.code(200).send(notes);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get a single note
  get: async (request, reply) => {
    try {
      const noteId = request.params.id;
      const note = await Note.findById(noteId);
      reply.code(200).send(note);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

 
  //#delete a note
  delete: async (request, reply) => {
    try {
      const noteId = request.params.id;
      const noteToDelete = await Note.findById(noteId);
      await Note.findByIdAndDelete(noteId);
      reply.code(200).send({ data: noteToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
*/
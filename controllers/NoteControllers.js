

const Note = require('../models/Note');

 
  //# create a note
exports.create =  (req, res) => {
  
     console.log('ROUTE SUCCEED')
     const note=new  Note({
      text:req.body.text,
      id:req.body.id,
    
    
 });
 note.save((error, note)=>{
     if (error) {
       
         return res.status(400).json({
           message: (error),
         });
       }
       if (note) {
         
         const {text,id} = note;
         return res.status(201).json({
           
           note: {text,id},
         });
       } 
 })
  }
exports.getnotes =(req,res)=>{
 Note.find().then((data) => {
  res.header('Access-Control-Expose-Headers', 'Content-Range')
  res.header("Content-Range", `notes 1-9/9`);
    res.json(data)
    console.log("FETCH SUCCED")
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
 exports.edit= (req, res) => {
 console.log("WE ARE UPDATING HORAIRE")
 const id=req.params.id;
const text=req.body.text;
 Note.findByIdAndUpdate((id),{text:req.body.text}
     ).then((data)=>{
const noteup={id,text}
      res.json(noteup)
      console.log("UPDATE SUCCED",noteup)
      

     })
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
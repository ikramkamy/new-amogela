const userModel = require('../models/userModel');

module.exports = (request, reply, done) => {
    userModel.count({}, (err, count) => {
    if (err) {
      console.error(err);
      reply.code(500).send('Error!');
    }
    reply.header('Content-Range', `notes 0-${count}/${count}`);
    done();
  });
};
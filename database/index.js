const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gtc');

const challengeSchema = new mongoose.Schema({
  question: String,
  a: String,
  b: String,
  c: String,
  d: String
});

const Challenge = mongoose.model('Challenge', challengeSchema);

const get = function(cb) {
  return Challenge.find({})
    .then(data => {
        cb(data);
        return data;
      }
    )
    .catch(err => cb(err));
};

module.exports.get = get;
let mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    name: String,
    comment: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'users' },
    filmId: { type: mongoose.Types.ObjectId, ref: 'films' }
  }
);

module.exports = mongoose.model('comments', commentSchema);

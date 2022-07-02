const Comment = require('../Models/comments.model');

// Create Comment
exports.createComments = async (req, res) => {
  try {
    const comment = await new Comment({
      name: req.body.name,
      comment: req.body.comment,
      userId: req.body.userId,
      filmId: req.body.filmId
    }).save();

    return res.status(200).json({ message: 'Film Created', comment });
  }
  catch (error) {
    return res.status(401).json({
      message: 'Error at Create Comments !',
      error: error,
    })
  }
};


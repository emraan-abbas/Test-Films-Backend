const router = require('express')();

const comment = require('../Controllers/comments.controller')

router.post('/add-comment', comment.createComments);

module.exports = router

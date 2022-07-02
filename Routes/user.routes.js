const router = require('express')();

const user = require('../Controllers/user.controller')

router.post('/signup', user.signup);
router.post('/login', user.login);

module.exports = router


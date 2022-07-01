const User = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Signup
exports.signup = async (req, res) => {
  try {
    await bcrypt.hash(req.body.password, 8, async (err, hash) => {
      if (err) {
        return res.status(401).json({
          message: 'Error at Bcrypt !',
          error: err,
        })
      }
      else {
        const user = await new User({
          name: req.body.name,
          email: req.body.email,
          password: hash
        }).save();

        return res.status(200).json({ message: 'Signup Success !', user });
      }
    });
  }
  catch (error) {
    return res.status(401).json({
      message: 'Error at Signup !',
      error: error,
    })
  }
};


// User Login
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    console.log('================')
    console.log(user)
    console.log('================')
    if (!user) {
      return res.status(402).json({
        message: 'No Such User Found !',
      })
    }
    else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Password Incorrect !',
          })
        }
        else {
          //JWT here
          const token = jwt.sign({ email: req.body.email }, 'myKey', { expiresIn: '1h' })

          return res.status(200).json({ message: 'Login Success !', result, token });
        }
      });
    }
  }
  catch (error) {
    return res.status(401).json({
      message: 'Error at Login !',
      error: error,
    })
  }
};

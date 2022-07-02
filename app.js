let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
const filmRoutes = require('./Routes/film.routes')
const commentRoutes = require('./Routes/comments.routes')
const userRoutes = require('./Routes/user.routes')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// CORS
app.use(cors());

// Making Upload Folder Public
app.use('/uploads', express.static('uploads'));

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/films', {
  useNewUrlParser: true
})
  .then(() => {
    console.log('Database Connected !');
  })
  .catch((error) => {
    console.log('Error at DB Connection !', error);
    process.exit();
  });

// All Routes
app.use(filmRoutes)
app.use(commentRoutes)
app.use(userRoutes)


// Server Creation
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Film App is running on Port: ${PORT}`);
});


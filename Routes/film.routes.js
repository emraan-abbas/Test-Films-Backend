const router = require('express')();
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage, limits: { fieldSize: 1024 * 1024 * 5 } });

const film = require('../Controllers/film.controller')

router.get('/films', film.showAllFilms); //Show All Film (1 film per page)
router.get('/films/:film', film.findByName); //Show Film By Name
router.post('/films/create', upload.single('photo'), film.createFilm); //Create Film

module.exports = router

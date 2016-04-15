var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FCC File MetaData API' });
});

router.post('/upload', upload.single('myFile'), function (req, res, next) {
  console.log(req.file);
  var fileMD = { size : req.file.size };
  res.send(JSON.stringify(fileMD));
})
 

module.exports = router;

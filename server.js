var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require('multer');
var upload = multer();


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// post file and show the metadadata info
app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next)=>{
  let text = req.file // the file
  res.json({
    name: text.originalname,
    type: text.mimetype,
    size: text.size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

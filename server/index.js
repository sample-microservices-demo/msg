// ref - https://developers.google.com/identity/sign-in/web/backend-auth

var express = require('express');


var port = process.env.PORT || 3004

var app = express();
app.use(express.static(__dirname + '/../client/dist'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/msg', (req, res) => {
   res.send('Some Msg!!');

})

// app.get('/foot', (req, res) => {
//   res.send('bye!!')
// })


app.listen(port, function() {
  console.log('listening on port  '+port);
});










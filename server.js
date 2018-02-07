const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 4300,function(){
  console.log('server is up at 4300');
});

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})
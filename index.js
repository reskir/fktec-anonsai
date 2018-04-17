const express = require('express')
const app = express()
const path = require("path");

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.type('.html');
    res.sendFile(path.join(__dirname+'/index.html'));
});
  
//pp.get('/', (req, res) => res.render('index'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
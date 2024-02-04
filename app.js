var express = require('express'); // Instantiate server
var bodyParser = require('body-parser');
var app = express();  // create express app

app.use(bodyParser.text({
    type:function(req){
        return 'text';
    }
})) // Use the body parser Middleware

//THe app will listen on the root directory, anything 
//that posts to the root directory will be responded 
//to with the content type of what was sent
app.post('/', (req, res)=> {
    console.log(req.body)
    res = res.status(200)
    var contentType = req.get('Content-Type')
    if (contentType) {
        console.log("Content type:" + contentType)
        res = res.type(contentType)
    }
    res.send(req.body)
})

app.listen(process.env.PORT || 8080);


module.exports = app; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008

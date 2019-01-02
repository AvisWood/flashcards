const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();
const path = require('path')
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

let db
let flashcards = []

app.use(bodyParser.urlencoded({extended:true}))
MongoClient.connect('mongodb://sandbox:saquahia1@ds139352.mlab.com:39352/flash-card',(err, database)=>{
        if (err) return console.log(err)
        db = database.db('flash-card')
        app.listen(3000, function(){
            console.log("listening on port 3000")
            })
    })
    
    app.get('/', function(req, res){
        let cursor = db.collection("triviaQuestion").find().toArray(function(err,results){
                if (err) return console.log(err)
                flashcards = results
                console.log(results)
                res.render('index.pug')
    })
})

app.get('/flashcards',function(req,res){
    res.send(flashcards)
})

app.post('/addcard',(req,res)=>{
    db.collection('triviaQuestion').insertOne(req.body, (err,result)=>{
        if (err) return console.log(err)
        console.log('saved to database :)')
        res.redirect('/')
    })

})
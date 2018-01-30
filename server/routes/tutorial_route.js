const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var Tutorial = require('../model/tutorial_model');


router.post('/addSubject',function(req,res){

    var sub = req.body;
    console.log('route',sub.fields.subject);

Tutorial.addSubject(sub.fields.subject,function(result){


});

}) ;


router.post('/addTutorial', function (req, res) {

    var sub = req.body;
    console.log(sub);

    Tutorial.addTutorial(sub, function (result) {

        console.log(result)
    });

});



router.post('/getTutorial',function(req,res){

   

        console.log("get Tutorial");
        var sub = req.body.fields;


        Tutorial.getTutorial(sub,function(err,result){
            console.log(' list tute',result)
            
            res.json(result)
          });	

});

router.post('/getSingleTutorial',function(req,res){

    var im  = req.body.fields;
  
    console.log('get single tutorial');

    Tutorial.getSingleTutorial(im,function(err,result){

       res.json(result); 
    });


});


router.get('/getSubjects', function(req, res){
    Tutorial.getSubjects(function(err,result){
     if(result){
         console.log(result);
         res.json(result);
     }
     else {
         console.log('error in founding the subject');
     }
    });
});













module.exports = router;
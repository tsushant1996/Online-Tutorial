const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var Discussion = require('../model/discussion_model');
var Tutorial = require('../model/tutorial_model');
async = require("async");



router.get('/getDiscussions', function (req, res) {

    Discussion.findDiscussions(function (err, discussions) {

        if (discussions) {
            console.log(discussions);
            res.json(discussions);
        }

    });

});

router.post('/getSingleDiscussions', function (req, res) {
    console.log('get single');
    var sub = req.body;
    var id = sub.fields.id;
    Discussion.findByIdentifier(id, function (err, discussions) {
        if (discussions) {
            
            res.json(discussions);
        }
    });
});

router.post('/addDiscussion',function(req,res){
    var sub = req.body;

    Discussion.saveDiscussion(sub,function(err){
      res.status(200);
    });

});

router.post('/deleteDiscussion', function (req, res) {
    var im = req.body.fields.subject;
    console.log(im);
 
  async.forEach(im,function(id,callback){

    Discussion.deleteDiscussion(id, function (err,result) {
         
    });

  });
  
});

router.post('/addComment', function (req, res) {
    
   var fields =  req.body.fields;

    Discussion.addComment(fields,function (callback) {

       console.log(callback)

    });

});


router.post('/addSubject',function(req,res){

    var fields = req.body.fields;

   Tutorial.addSubject(fields,function(result){

   });

});






module.exports = router;
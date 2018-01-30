const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var Question = require('../model/question_model');




router.post('/getquestion',function(req,res){
    console.log('questionservice');
	   
   var sub = req.body;
   console.log(sub.fields.subject);
   var subject = sub.fields.subject;
	  
	    Question.findQuestionBlog(subject,function(err,result){
            
          res.json(result);
	    });	
});


module.exports = router;
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


/*
module.exports.addSubject = function(subjectValue){
    console.log(subjectValue);

var sub = new  Tutorial({subject:subjectValue });

sub.save(function(error){
    if(error){
        console.log('not founds');
    }
    else{
        console.log('subject save');
    }
});
 

}

module.exports.addTutorial = function(tute,callback){

    console.log(tute.fields.id);
    var id =tute.fields.id;

    var comment = {tutorialKey:tute.fields.key,tutorialValue:tute.fields.body,};
            Tutorial.findByIdAndUpdate(id, 

                    { $push :{ "SubjectTutorial" : comment} },function(error){
                        if(error) {
                            callback('not done');
                        }
                        else {
                            callback('done');
                        }
                    });
}


module.exports.getTutorial = function(sub,callback){
   var id = sub.id;
   console.log(id);
 
    //Find the first document in the customers collection:
            Tutorial.findById(id,callback);
           
           
}
module.exports.getSingleTutorial = function(sub,callback){
    console.log('get tutorial',sub);
    var id = sub.subject
    var id_2 = sub.id;
     //Find the first document in the customers collection:
            // Tutorial.findById(id,callback);
            Tutorial.findById( { _id: id },
                { SubjectTutorial: { $elemMatch: { _id: id_2 } } } ,callback);
            
 }

 module.exports.getSubjects = function(callback){
     Tutorial.find(callback);
 }


*/










module.exports = router;
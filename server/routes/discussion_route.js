const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var Discussion = require('../model/discussion_model');
var Tutorial = require('../model/tutorial_model');
var json = {};
async = require("async");


//For Getting all Discussions
router.get('/getDiscussions', function (req, res) {

    Discussion.find({}, function (err, discussions) {
        if (err) {
            json.status = '0'
            json.result = { 'message': 'Discussions not found' };
            res.send(json);
        } else {
            json.status = '1'
            json.result = { 'message': 'Discussion Found successfully', 'discussions': discussions };
            res.send(json);
        }
    });
});

//For getting single discussions
router.post('/getSingleDiscussions', function (req, res) {
    var sub = req.body;
    var id = sub.fields.id;

    Discussion.findById(id, function (err, discussion) {
        if (err) {
            json.status = '0'
            json.result = { 'message': 'discussion not found' };
            res.send(json);
        } else {
            json.status = '1'
            json.result = { 'message': 'discussion found successfully', 'discussion': discussion };
            res.send(json);
        }
    });

});

//For saving the Discusssion
router.post('/addDiscussion', function (req, res) {
    var sub = req.body;

    var discussionObject = {
        'discussion_title': sub.fields.title,
        'discussion_text': sub.fields.body,
        'discussion_subject': sub.fields.subject,
        'discussion_user': sub.fields.user,
        'discussion_date': new Date()
    };
    var discussion = new Discussion(discussionObject);

    discussion.save(function (err, discussion) {
        if (err) {
            json.status = '0;'
            json.result = { 'message': 'discussion not saved' };
            res.send(json);
        } else {
            json.status = '1';
            json.result = { 'message': 'discussion saved', 'discussion': discussion };
            res.send(json);
        }
    });
});

//For deleting the Discussion
router.post('/deleteDiscussion', function (req, res) {
    var im = req.body.fields.subject;

    async.forEach(im, function (id, callback) {

        Discussion.deleteDiscussion(id, function (err, result, callback) {
            counter++;
            callback();
        });


    }, function (err) {
        if (err) {
            console.log('err found')
        }
        else {
            console.log('counter', counter);
        }
    });

});

//For adding comment in discussison
router.post('/addComment', function (req, res) {

    var comment = {
        commentBody: fields.body,
        commentOn: fields.id,
        commentBy: fields.user
    };

    Discussion.findByIdAndUpdate(fields.id,
        {
            $push:
                {
                    "comment":  comment       
                }
        },
      function(err,discussion){
          if (err){
              json.status = '0';
              json.result = {'message' : 'comment not saved'};
              res.json(json);
          } else {
              json.status = '1';
              json.result = {'message': 'comment saved successfully', 'discussion': discussion};
              res.send(json);
          }
      }
    );
});

/*
module.exports.findDiscussions = function(callback){

    Discussion.find(callback);
}

module.exports.findByIdentifier = function(id,callback){

    Discussion.findById(id,callback);
}

module.exports.saveDiscussion = function(dis,callback){
    console.log('add discussion',dis);

    var dis = new Discussion({discussion_title:dis.fields.title, discussion_text:dis.fields.body, discussion_subject:dis.fields.subject,
     discussion_user:dis.fields.user, discussion_date :new Date() } );
      
     

     dis.save(function(error,discussions){

        if(error){
            console.log('error found');
        }
        else {
         callback(discussions);
        }
     });
     

}


module.exports.deleteDiscussion = function(id){

    

    Discussion.findByIdAndRemove(id, (err) => {  
        
        if(err){
            console.log('err found');
        }
        else{
            console.log('no err');
        }
    });
}

module.exports.addComment = function(fields,callback) {

    var comment = {commentBody:fields.body,commentOn:fields.id,commentBy:fields.user};

            Discussion.findByIdAndUpdate(fields.id, 

                    { $push :{ "comment" : comment} },callback);
}



*/




module.exports = router;
/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');

// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://sushant:sushant@ds119688.mlab.com:19688/nodeauth', {
  useMongoClient: true,
  /* other options */
});
// Or `createConnection`
var promise = mongoose.createConnection('mongodb://sushant:sushant@ds119688.mlab.com:19688/nodeauth', {
  useMongoClient: true,
  /* other options */
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://sushant:sushant@ds119688.mlab.com:19688/nodeauth";


// Discussion Schema
var DiscussionSchema = mongoose.Schema({
    discussion_title: {
        type: String,
        index: true
    },
    discussion_text: {
        type: String,
        index: true
    },
    discussion_subject: {
        type: String,
        required: true
       
    },
    discussion_user: {
        type: String,
        required: true
    },
    discussion_date: {
        type: Date,
        required: true
    },
    comment:[{
        
         commentBody : {
            type:String
        },
        commentOn:{
            type:String
        },
        commentBy:{
            type:String
        }
    

        }],  
},{collection:'Discussions'});


var Discussion = module.exports = mongoose.model('Discussions', DiscussionSchema);




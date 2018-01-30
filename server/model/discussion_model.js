/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');

// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://localhost/nodeauth', {
  useMongoClient: true,
  /* other options */
});
// Or `createConnection`
var promise = mongoose.createConnection('mongodb://localhost/nodeauth', {
  useMongoClient: true,
  /* other options */
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/nodeauth";


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

module.exports.findDiscussions = function(callback){

    Discussion.find(callback);
}

module.exports.findByIdentifier = function(id,callback){

    Discussion.findById(id,callback);
}

module.exports.saveDiscussion = function(dis){
    console.log('add discussion',dis);

    var dis = new Discussion({discussion_title:dis.fields.title, discussion_text:dis.fields.body, discussion_subject:dis.fields.subject,
     discussion_user:dis.fields.user, discussion_date :new Date() } );
      
     

     dis.save(function(error){
         
        if(error){
            console.log('error found');
        }
        else {
            console.log('no error');
        }
     })
     

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



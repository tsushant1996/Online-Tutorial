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


// Question Schema
var QuestionSchema = mongoose.Schema({
    ques_text: {
        type: String,
        index: true
    },
    ques_option1: {
        type: String,
        required: true
       
    },
    ques_option2: {
        type: String,
        required: true
    },
    ques_option3: {
        type: String,
        required: true
    },
    ques_option4: {
        type: String,
        required: true
    },
    ques_level: {
    	type: String,
    	required: true
    },
    ques_subject: {
    	type: String,
    	required: true
    },
    ques_set: {
    	type: String,
    	required: true
    },
    ques_answer: {
    	type: String,
    	required: true
    },
    
   
},{collection:'Questions'});

var Question = module.exports = mongoose.model('Question', QuestionSchema);

var result;


module.exports.findQuestionBlog= function(subject,callback){
	 var query = {ques_subject: subject}
 //Find the first document in the customers collection:
		 Question.find(query,callback );	
	
}


module.exports.checkForAnswer = function(id,callback){
	
	Question.findById(id,callback);
}
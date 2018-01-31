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

//tutorial Schema
// Discussion Schema
var TutorialSchema = mongoose.Schema({
    subject: {
        type: String,
        index: true
    },
    SubjectTutorial:[{
        
         tutorialKey : {
            type:String
        },
        tutorialValue:{
            type:String
        },   
    }],  
},{collection:'Tutorials'});

var Tutorial = module.exports = mongoose.model('tutorial', TutorialSchema);

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


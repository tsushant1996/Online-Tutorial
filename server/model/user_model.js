var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
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




// User Schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    profileimage: {
        type: String
    },
},{collection:'users'});

var User = module.exports = mongoose.model('User', UserSchema);


module.exports.comparePassword = function(candidatePassword,hash,callback){
	 bcrypt.compare(candidatePassword,hash,function(err,isMatch){
	 	if(err) throw err;
	 	callback(null,isMatch);
	 });
	}

	module.exports.getUserById = function(id,callback){
		User.findById(id,callback); 
	}

	module.exports.getUserByUsername = function(callback){
		
		User.find(callback); 
	}



module.exports.createUser = function(newUser,callback){
	bcrypt.hash(newUser.password,10,function(err,hash){
		
		console.log(newUser);

		if(err) throw err;
		//Set hashed pw
		newUser.password = hash;
		// create user
		newUser.save(callback);
	});
	
}



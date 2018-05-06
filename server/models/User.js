const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
	email : String,
	password: String,
	solved : [String]
})

mongoose.model('users', userSchema);
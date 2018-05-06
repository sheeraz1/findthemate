const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleSchema = new Schema ({
	fen : String,
	solution: [String]
})

mongoose.model('puzzles', puzzleSchema);
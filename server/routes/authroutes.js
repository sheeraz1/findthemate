const passport = require('passport');
const mongoose = require('mongoose');
module.exports = (app) => {
	app.get(
		'/api/current_user', (req, res)=>{
		res.send(req.user);
	});

	app.post('/api/login', function(req,res) {
		passport.authenticate('local-login', {
			successRedirect : '/', // redirect to the secure profile section
			failureRedirect : '/login', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}
	)});

	app.post('/api/register', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	app.get(
		'/api/puzzles', (req, res)=>{
		const Puzzles = mongoose.model('puzzles');
		Puzzles.find({}, function(err, docs) {
			res.send(docs);
		});
	});
};



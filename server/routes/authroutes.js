const passport = require('passport');
const mongoose = require('mongoose');

module.exports = (app) => {
	app.get(
		'/api/current_user', (req, res)=>{
		res.send(req.user);
	});

	app.post('/api/login', (req,res,next) =>{
		return passport.authenticate('local-login', (err, user,info) => {
			if (err){
				return res.status(400).json({
					success: false,
					message: 'Server Error'
					});
			}
			if (user){
				req.login(user, function(err) {
					if (err) { return next(err); }
				});

				return res.status(200).json({
					success: true,
					message: 'You have successfully logged in!',
					user: user
				});
			}

			else{
				 return res.status(200).json({
					success: false,
					message: info.message
					});
				 
			}

		  })(req, res, next);
		}
	);

	app.post(
		'/api/solved', (req, res)=>{
			const User = mongoose.model('users');
			User.findOne({ _id :  req.body.userid }, function(err, user) {
				// if there are any errors, return the error
				if (err)
					return;
	
				// if no user is found, return the message
				var id = req.body.puzzleid;
				if (!user)
					return;
				if (user.solved)
					user.solved.push(id);
				else user.solved=[id];
				user.save(function(err){
				});
	
				// all is well, return user
			});
	});


	app.post(
		'/api/current_puzzle', (req, res)=>{
			const User = mongoose.model('users');
			User.findOne({ _id :  req.body.userid }, function(err, user) {
				// if there are any errors, return the error
				if (err)
					return;
	
				// if no user is found, return the message
				var id = req.body.puzzleid;
				user.currentPuzzle = {
					id : id,
					fen : req.body.fen,
					solutions : req.body.solutions
				}
				user.save(function(err){
				});
	
				// all is well, return user
			});
	});

	app.post('/api/register', (req,res,next) =>{
		return passport.authenticate('local-signup', (err, user) => {
			if (err) {
	
			  return res.status(400).json({
				success: false,
				message: 'Registration is unavailable. Please try again later'
			  });
			}
		
			return res.json({
			  success: true,
			  message: 'You have successfully registered',
			  user: user
			});
		  })(req, res, next);
		}
	);

	app.get(
		'/api/puzzles', (req, res)=>{
		const Puzzles = mongoose.model('puzzles');
		Puzzles.find({}, function(err, docs) {
			res.send(docs);
		});
	});



	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	  });
};

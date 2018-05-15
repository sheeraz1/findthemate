const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    console.log("serializing user");
	done(null, user._id);
});

passport.deserializeUser((id, done) =>{
	User.findById(id, function(err, user) {
        console.log('deserializing user');
        done(err, user);
    });
});

passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
},
function(req, email, password, done) {
    if (email)
        email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
    console.log('trying to find user');
    // asynchronous
    process.nextTick(function() {
        User.findOne({ email :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, null);

            if (user.password != password)
                return done(null, null);

            // all is well, return user
            return done(null, user);
        });
    });

}));

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
},
function(req, email, password, done) {
    if (email)
        email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
    // asynchronous
    process.nextTick(function() {
        // if the user is not already logged in:
        console.log('we are inside authenticate');
        if (!req.user) {
            User.findOne({ 'email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // check to see if theres already a user with that email
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {

                    // create the user
                    console.log('did not find user with email ' + email);
                    var newUser = new User();

                    newUser.email    = email;
                    newUser.password = password;
                    newUser.solved=[]
                    var defaultPuzzle = {
                        id: '5ae511e58d453c3c6057fa0d',
                        fen: '4k2r/1q3p1p/p2RpQ2/2p1P3/8/1P3b2/P4PrP/4R2K b - - 1 25',
                        solutions:
                        [ 'g2g8 f6f3 b7f3',
                          'g2g7 f6f3 b7f3',
                          'g2g6 f6f3 b7f3',
                          'g2g5 f6f3 b7f3',
                          'g2g4 f6f3 b7f3',
                          'g2g3 f6f3 b7f3' ],
                       
                    }
                    newUser.currentPuzzle = defaultPuzzle;
                    console.log('added puzzle');
                    newUser.save(function(err) {
                        if (err)
            
                            return done(err);
                        console.log('no error in authenticate');
                        return done(null, newUser);
                    });
                }

            });
        // if the user is logged in but has no local account...
        
    } 
    else {
        console.log('already signed in');
    }

    });

}));
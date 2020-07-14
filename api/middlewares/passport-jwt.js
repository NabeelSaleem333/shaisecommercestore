const passportJWT = require("passport-jwt");
const passport = require("passport");
const User  = require("../resources/user/user.model");
// const devConfig = require('../../config/development');

 module.exports = setJWTStrategy = () => {
  var opts = {};
  opts.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = 'Jesus37';
  passport.use(
    new passportJWT.Strategy(opts, (payload, done) => {
      User.findOne({ _id: payload.id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }
          return done(null, false);
          // or you could create a new account
      });
    })
  )
};

// module.exports = setJWTStrategy;
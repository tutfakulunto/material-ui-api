// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
// Client ID:
// 971484670446-9qki2iaofkummc5797rgqro918loukil.apps.googleusercontent.com
// Client secret:
// iNtzYRrIGuYk2YEqTa0sQKi1
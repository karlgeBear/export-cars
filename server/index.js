const express = require('express')
// Create express instance
const app = express()
// Require API routes
const api = require('./api')
const bodyParser = require('body-parser')

// Import API Routes
app.use(api)
// create application/json parser
app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }))

// set global rotuer res
app.all('*', function(req, res, next) {
  console.log(11111)
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
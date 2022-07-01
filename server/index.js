const express = require('express')
const Nuxt = require('nuxt')

// Create express instance
const app = express()

// Require API routes
// import api from './api'
const api = require('./api')
// const test = require('./routes/test')

// Import API Routes
app.use(api)
// app.use(test)

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

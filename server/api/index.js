const { Router } = require('express')

const  databases = require('./controller/interface') 

const router = Router()

// Add databases Routes
router.use(databases)
// router.use('/test', (req, res) => {
//   res.end('返回成功')
// })

module.exports = router

// const { Router } = require('express')

// const router = Router()

// // Test route
// router.use('/test', (req, res) => {
//   res.end('返回成功')
// })

// module.exports = router

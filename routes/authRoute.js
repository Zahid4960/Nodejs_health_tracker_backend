const router = require('express').Router()

// controllers
const authController = require('../controllers/authController')

router.get('/', (req, res) => res.status(200).json('Welcome to nodejs health tracker backend!!!'))
router.get('/sign-in',  authController.SignIn)

module.exports = router
const router = require('express').Router()

// controllers
const authController = require('../controllers/authController')
const foodAndCalorieController = require('../controllers/foodAndCalorieController')

router.get('/', (req, res) => res.status(200).json('Welcome to nodejs health tracker backend!!!'))
router.get('/sign-in',  authController.SignIn)

router.all('/food-and-calorie', foodAndCalorieController.index)


module.exports = router
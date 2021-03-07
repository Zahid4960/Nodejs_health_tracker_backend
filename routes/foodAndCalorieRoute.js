const router = require('express').Router()


// controllers
const foodAndCalorieController = require('../controllers/foodAndCalorieController')


router.get('/food-and-calorie', foodAndCalorieController.index)


module.exports = router
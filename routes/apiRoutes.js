const router = require("express").Router()

// controllers
const authController = require("../controllers/authController")
const foodAndCalorieController = require("../controllers/foodAndCalorieController")

router.get("/", (req, res) => res.status(200).json("Welcome to nodejs health tracker backend!!!"))
router.get("/sign-in",  authController.SignIn)


// food and calories related routes 
router.get("/food-and-calorie", foodAndCalorieController.index)
router.post("/food-and-calorie", foodAndCalorieController.store)
router.get("/food-and-calorie/:id", foodAndCalorieController.show)
// router.put("/food-and-calorie/:id", foodAndCalorieController.update)
router.delete("/food-and-calorie/:id", foodAndCalorieController.destroy)

module.exports = router
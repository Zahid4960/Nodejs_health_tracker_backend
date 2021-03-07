// respositories
const foodAndCalorieRepo = require("../repositories/foodAndCalorieRepo")

const index = async() => await foodAndCalorieRepo.getAll()


module.exports = {
    index
}
// respositories
const foodAndCalorieRepo = require("../repositories/foodAndCalorieRepo")

const index = async () => await foodAndCalorieRepo.getAll()

const show = async (id) => await foodAndCalorieRepo.getByid(id)


module.exports = {
    index,
    show
}
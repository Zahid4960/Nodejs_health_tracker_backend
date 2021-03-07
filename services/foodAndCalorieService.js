// respositories
const foodAndCalorieRepo = require("../repositories/foodAndCalorieRepo")

const index = async () => await foodAndCalorieRepo.getAll()

const store = async (payload) => await foodAndCalorieRepo.saveData(payload)

const show = async (id) => await foodAndCalorieRepo.getByid(id)


module.exports = {
    index,
    store,
    show
}
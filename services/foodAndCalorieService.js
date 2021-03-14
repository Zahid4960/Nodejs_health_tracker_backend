const foodAndCalorieRepo = require("../repositories/foodAndCalorieRepo")

   
const index = async () => await foodAndCalorieRepo.getAll()

const store = async (payload) => await foodAndCalorieRepo.saveData(payload)

const show = async (id) => await foodAndCalorieRepo.getByid(id)

const update = async (id, payload) => await foodAndCalorieRepo.updateData(id, payload)

const remove = async (id) => await foodAndCalorieRepo.deleteData(id)

module.exports = {
    index,
    store,
    show,
    update,
    remove
}



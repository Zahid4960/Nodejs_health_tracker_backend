// models
const modelInitiate = require("../models/index")
const model = modelInitiate.foodAndCalories

// repositories
const foodAndCalorieRepo = require("../repositories/foodAndCalorieRepo")
const baseRepo = require("../repositories/BaseRepository")

   
const index = async (page, limit) => await baseRepo.getAllWithPagination(model, page, limit)

const store = async (payload) => await baseRepo.saveData(model, payload)

const show = async (id) => await baseRepo.getByid(model, id)

const update = async (id, payload) => await foodAndCalorieRepo.updateData(id, payload)

const destroy = async (id) => await baseRepo.deleteData(model, id)

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}



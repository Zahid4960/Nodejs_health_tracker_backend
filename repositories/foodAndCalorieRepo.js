const model = require("../models/index")

const getAll = async () => await model.foodAndCalories.findAll()

const getByid = async (id) => await model.foodAndCalories.findAll({ where: { id: id} })


module.exports = {
    getAll,
    getByid
}
const Model = require("../models/index")

const getAll = async (model) => await Model.model.findAll()

module.exports = {
    getAll
}
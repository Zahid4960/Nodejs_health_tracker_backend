const getAllWithPagination = async (model, page, limit) => await model.findAll({ offset: page, limit: limit })

const saveData = async (model, payload) => await model.create(payload)

const getByid = async (model, id) => await model.findOne({ where: { id: id } })

const updateData = async (model, id, payload) => await model.update(payload, { where: { id: id } })

const deleteData = async (model, id) => await model.destroy({ where: { id: id} })

module.exports = {
    getAllWithPagination,
    saveData,
    getByid,
    updateData,
    deleteData
}
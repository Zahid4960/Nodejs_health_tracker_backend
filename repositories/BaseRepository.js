const getAllWithPagination = async (model, page, limit) => {
    return await model.findAll({ offset: page, limit: limit })
}

const saveData = async (model, payload) => {
    const { foodName, amount, calorie } = payload
    return await model.create({ foodName, amount, calorie })
}

const getByid = async (model, id) => await model.findAll({ where: { id: id} })

const deleteData = async (model, id) => await model.destroy({ where: { id: id} })

module.exports = {
    getAllWithPagination,
    saveData,
    getByid,
    deleteData
}
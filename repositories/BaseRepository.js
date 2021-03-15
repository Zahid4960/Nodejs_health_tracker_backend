const getAllWithPagination = async (model, page, limit) => {
    return await model.findAll({ offset: page, limit: limit })
}

const saveData = async (model,payload) => {
    const { foodName, amount, calorie } = payload
    return await model.create({ foodName, amount, calorie })
}

module.exports = {
    getAllWithPagination,
    saveData
}
// const model = require("../models/index")

// const getAll = async () => await model.foodAndCalories.findAll()

// const saveData = async (payload) => {

//     const { foodName, amount, calorie } = payload
    
//     return await model.foodAndCalories.create({ foodName, amount, calorie })
// }

// const getByid = async (id) => await model.foodAndCalories.findAll({ where: { id: id} })

// const updateData = async (id, payload) => {
//     const { foodName, amount, calorie } = payload
//     return await model.foodAndCalories.update({ foodName, amount, calorie }, { where: { id: id } })
// }

// const deleteData = async (id) => {
//     await model.foodAndCalories.destroy({ where: { id: id} })
// }

// module.exports = {
//     getAll,
//     saveData,
//     getByid,
//     updateData,
//     deleteData
// }
const model = require("../models/index")

const getAll = async() => await model.foodAndCalories.findAll()


const saveFood = async (payload) => {
    const { foodName, amount, calorie } = payload

    const foodAndCalorieModel = new foodAndCalorieModel
    foodAndCalorieModel.foodName = foodName
    foodAndCalorieModel.amount = amount
    foodAndCalorieModel.calorie = calorie

    return await foodAndCalorieModel.save()
}

module.exports = {
    getAll,
    saveFood
}
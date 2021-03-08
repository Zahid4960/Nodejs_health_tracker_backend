// respositories
const foodAndCalorieRepo = require("../repositories/foodAndCalorieRepo")

const index = async () => await foodAndCalorieRepo.getAll()

const store = async (payload) => await foodAndCalorieRepo.saveData(payload)

const show = async (id) => await foodAndCalorieRepo.getByid(id)

const update = async (id, payload) => {
    const isPresent = await foodAndCalorieRepo.getByid(id)

    if(isPresent){
        isPresent.foodName = payload.foodName
        console.log(isPresent.foodName)
        isPresent.amount = payload.amount
        isPresent.calorie = payload.calorie

        return await isPresent.save()
    }
}

const destroy = async (id) => await foodAndCalorieRepo.deleteData(id)

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}
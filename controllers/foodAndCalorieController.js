// services
const foodAndCalorieService = require("../services/foodAndCalorieService")

exports.index = async (req, res) => {
    try{
        let page = req.query.page == [] ? 1: parseInt(req.query.page)
        let limit = req.query.limit == [] ? 10 : parseInt(req.query.limit)
        page = (page * limit) - limit
        let data = await foodAndCalorieService.index(page, limit)
        if(data.length > 1){
            return res.status(200).json({ "status": "success", "msg": "Food and their calories data found!!!", "data": data })
        }
        return res.status(200).json({ "status": "success", "msg": "Food and their calories data not found!!!","data": data })
    }catch(err){
        console.log(err)
        return res.status(500).json({ "status": "failed","msg": "Exception appear!!!"})
    }
} 


exports.store = async (req, res) => {
    try {
        const payload = req.body 
        const isSaved = await foodAndCalorieService.store(payload)
        if(isSaved){
            return res.status(200).json({ "status": "success", "msg": "Food and calorie data saved successfully!!!", "data": isSaved })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({  "status": "failed", "msg": "Exception appear food and calorie data failed to save!!!", "errors": error.errors[0]["message"] })
    }
}


exports.show = async (req, res) => {
    try {
        let id = req.params.id 
        let data = await foodAndCalorieService.show(id)
        if(data == null){
            return res.json({ "status": "success", "msg": "Food and their calories not found!!!", "data": data })
        }
        return res.json({ "status": "success", "msg": "Food and their calories found!!!", "data": data })
    } catch (error) {
        console.log(error)
        return res.json({ "status": "failed", "msg": "Exception appear!!!" })
    }
}


exports.update = async (req, res) => {
    try {
        let id = req.params.id
        let payload = req.body
        let data = await foodAndCalorieService.update(id, payload)
        if(data == 1){
            return res.status(200).json({ "status": "success", "msg": "Food and calorie data updated!!!", "data": await foodAndCalorieService.show(id) })
        }else{
            return res.status(200).json({ "status": "success", "msg": "Food and calorie data do not updated!!!" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "status": "failed", "msg": "Exception appear food & calorie data failed to update!!!" })
    }
}


exports.destroy = async (req, res) => {
    try {
        let id = req.params.id
        if(await foodAndCalorieService.destroy(id)){
            res.status(200).json({ "status": "success", "message": "Food and calorie data deleted!!!" })
        }
        res.status(200).json({ "status": "success", "message": "Food and calorie data not found to delete!!!" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "status": "failed", "msg": "Exception appear food & calorie failed to delete!!!" })
    }
} 


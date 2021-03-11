// services
const foodAndCalorieService = require("../services/foodAndCalorieService")

exports.index = async (req, res) => {
    try{
        const data = await foodAndCalorieService.index()

        if(data.length > 1){
            return res.status(200).json({ "status": "success", "msg": "Food and their calories found!!!", "data": data })
        }
        return res.status(200).json({ "status": "success", "msg": "Food and their calories not found!!!","data": []})
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
            return res.status(200).json({
                "status": "success",
                "msg": "Food and calorie data saved successfully!!!",
                "data": isSaved
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            "status": "failed",
            "msg": "Exception appear!!!",
            "errors": error.errors[0]["message"]
        })
    }
}


exports.show = async (req, res, id) => {
    try {
        const id = req.params.id 
        const data = await foodAndCalorieService.show(id)

        if(data.length >= 1){
            return res.json({
                "status": "success",
                "msg": "Food and their calories found for id" + " " + id,
                "data": data
            })
        }

        return res.json({
            "status": "success",
            "msg": "Food and their calories not found for id" + " " + id,
            "data": []
        })
        
    } catch (error) {
        console.log(error)
        return res.json({ 
            "status": "failed",
            "msg": "Exception appear!!!",
        })
    }
}


exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const payload = req.body
        const data = await foodAndCalorieService.update(id, payload)

        if(data == 1){
            return res.status(200).json({
                "status": "success",
                "msg": "Food and calorie data updated for id" + " " + id,
                "data": await foodAndCalorieService.show(id) 
            })
        }else{
            return res.status(200).json({
                "status": "success",
                "msg": "Food and calorie data do not updated for id" + " " + id
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            "status": "failed",
            "msg": "Exception appear!!!",
            "errors": error.errors[0]["message"]
        })
    }
}


exports.remove = async (req, res, id) => {
    try {
        if(await foodAndCalorieService.remove(id)){
            return res.json("hit")
            res.status(200).json({
                "message": "success",
                "message": "Food and calorie data deleted for id" + " " + id
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            "status": "failed",
            "msg": "Exception appear!!!",
            "errors": error.errors[0]["message"]
        })
    }
} 


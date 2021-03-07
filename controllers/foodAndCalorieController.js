// services
const foodAndCalorieService = require("../services/foodAndCalorieService")

exports.index = async (req, res) => {
    try{
        const data = await foodAndCalorieService.index()

        if(data.length > 1){
            return res.status(200).json({ 
                "status": "success", 
                "msg": "Food and their calories found!!!", 
                "data": data 
            })
        }
        return res.status(200).json({ 
            "status": "success", 
            "msg": "Food and their calories not found!!!",
            "data": []
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({ 
            "status": "failed",
            "msg": "Exception appear!!!",
        })
    }
} 


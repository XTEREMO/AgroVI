const cropData = require('../../Database/cropData')
require("dotenv").config()


const crops = {
    get_crop_data: async(req,res)=>{
        try{
            const { value } = req.body;
            const crop_data = await cropData.findOne({crop_name:value})
            res.status(200).json({crop_data})
        }catch(error){
            res.status(400).json({massage:'No data found'})
        }
    }
}


module.exports = crops;
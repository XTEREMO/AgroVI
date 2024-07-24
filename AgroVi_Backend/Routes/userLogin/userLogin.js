const userLoginSchema = require('../../Database/userLoginSchema')
const jwt = require('jsonwebtoken')
const dayjs = require("dayjs")
require("dotenv").config()




const userLogin = {
    status: async(req,res)=>{
        const token = req.cookies["auth-token"];
            try {
                const verified = jwt.verify(token, process.env.JWT_KEY);
                res.json({ loginStatus: true});
            } catch (error) {
                res.json({ loginStatus: false });
            }
       
    },
    login: async(req,res) => {
        const { email,password } = req.body;

        const user = await userLoginSchema.findOne({email});
        
        if(!user) res.status(400).json({massege:"User Not Found",user:false})
        if(user.password != password) res.status(400).json({massege:"Incorrect Password",user:false})
        const payload = {
            id:user._id,
            email:user.email,
            admin:user.isAdmin
        }
        let token;
        try{
            token = jwt.sign(payload, process.env.JWT_KEY)
        }catch(error){
            res.status(500).json({massege:"Something went wrong"})
        }
        res.status(200).cookie('auth-token',token,{
           expires: dayjs().add(30, 'days').toDate()
        }).json({
            loginStatus: true
        });

    },
    signup: async(req,res) => {
            
    }
}

module.exports = userLogin; 
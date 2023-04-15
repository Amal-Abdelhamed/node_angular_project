const userModel = require("../../database/models/user.model")
const Handler = require("../handler")
class User {
    static add = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            Handler.resHandler(res,200,true,userData,"user added")
        }
        catch (e) {
            Handler.resHandler(res,500,false,e.message,"added filed")
        }
    }

    static allUsers = async (req,res)=>{
        try{

            const allUsers = await userModel.find()
            Handler.resHandler(res,200,true,allUsers,"all users showed")
        }
        catch(e){
            Handler.resHandler(res,500,false,e.message,"show all users failed")

        }

    }


}
module.exports = User
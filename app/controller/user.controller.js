const userModel = require("../../database/models/user.model")
const Handler = require("../handler")
class User {
    static add = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            Handler.resHandler(res, 200, true, userData, "user added")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "added filed")
        }
    }

    static allUsers = async (req, res) => {
        try {

            const allUsers = await userModel.find()
            Handler.resHandler(res, 200, true, allUsers, "all users showed")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "show all users failed")

        }

    }

    static showUser = async (req, res) => {
        try {
            const userData = await userModel.findById(req.params.id)
            
            Handler.resHandler(res, 200, true, userData, "user data updated")

        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "user failed to update")

        }
    }

    static editUser = async (req, res) => {
        try {
            const userData = await userModel.findById(req.params.id)
            for (let prop in req.body) {
                userData[prop] = req.body[prop]
            }
            await userData.save()
            Handler.resHandler(res, 200, true, userData, "user data updated")

        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "user failed to update")

        }
    }

    static deleteUser = async (req, res) => {
        try {
            const userData = await userModel.findByIdAndRemove(req.params.id)
            
            Handler.resHandler(res, 200, true, userData, "user deleted")

        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "failed to delete user")

        }
    }

    static deleteAllUsers = async (req, res) => {
        try {

            await userModel.deleteMany()
            Handler.resHandler(res, 200, true, [], "all users deleted")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "failed to delete all users")

        }

    }

    
}
module.exports = User
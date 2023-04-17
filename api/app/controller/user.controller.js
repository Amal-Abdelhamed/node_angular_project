const { compare } = require("bcrypt")
const userModel = require("../../database/models/user.model")
const Handler = require("../handler")
const bcrypt = require("bcrypt")
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

    static login = async (req, res) => {
        try {
            const user = await userModel.findOne({ code: req.body.code })
            if (!user) throw new Error("wrong student id")
            const compared = await bcrypt.compare(req.body.password, user.password)
            if (!compared) throw new Error("wrong password")

            const token = await user.generateToken()

            Handler.resHandler(res, 200, true, { user, token }, "user logged in")

        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "failed to login")

        }

    }

    static profile = async (req, res) => {
        Handler.resHandler(res, 200, true, req.user, "my profile")

    }

    static logout = async (req, res) => {
        try {

            // console.log(req.token);
            // console.log(req.user);
            // console.log(req.user.tokens);
            req.user.tokens = req.user.tokens.filter(t => t.token != req.token)
            await req.user.save()
            Handler.resHandler(res, 200, true, {}, "logged out")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "failed to logout")

        }


    }
    static logoutAll = async (req, res) => {
        try {
            req.user.tokens = []
            await req.user.save()
            Handler.resHandler(res, 200, true, {}, "logged out all")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "failed to logout all")

        }


    }
}
module.exports = User
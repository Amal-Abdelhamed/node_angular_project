const Handler = require("../handler")
const { verify } = require("jsonwebtoken")
const userModel = require("../../database/models/user.model")

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("bearer ", "")
        const decodedToken = verify(token, process.env.JWTKEY)
        const userData = await userModel.findOne({
            _id: decodedToken._id,
            "tokens.token": token
        })
        if (!userData) throw new Error("un auth")
        req.user = userData
        req.token = token
        next()
    }
    catch (e) {
        Handler.resHandler(res, 500, false, e.message, "not authorized")
    }
}
module.exports = auth
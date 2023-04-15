const router = require("express").Router()
const userController = require("../app/controller/user.controller")

router.post("/addUser", userController.add)
router.get("/showAllUsers", userController.allUsers)

module.exports = router
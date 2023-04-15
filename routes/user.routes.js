const router = require("express").Router()
const userController = require("../app/controller/user.controller")

router.post("/addUser", userController.add)
router.get("/showAllUsers", userController.allUsers)
router.get("/showUser/:id", userController.showUser)
router.patch("/editUser/:id", userController.editUser)
router.delete("/deleteUser/:id", userController.deleteUser)
router.delete("/deleteAllUsers", userController.deleteAllUsers)

module.exports = router
const router = require("express").Router()
const userController = require("../app/controller/user.controller")
const auth = require("../app/middleware/auth.middleware")

router.post("/addUser", auth, userController.add)
router.get("/showAllUsers", auth, userController.allUsers)
router.get("/showUser/:id", auth, userController.showUser)
router.patch("/editUser/:id", auth, userController.editUser)
router.delete("/deleteUser/:id", auth, userController.deleteUser)
router.delete("/deleteAllUsers", auth, userController.deleteAllUsers)
router.post("/login", userController.login)
router.get("/myProfile", auth, userController.profile)
router.post("/logout", auth, userController.logout)
router.post("/logoutAll", auth, userController.logoutAll)


module.exports = router
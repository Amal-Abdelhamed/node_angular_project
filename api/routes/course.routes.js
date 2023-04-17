const router = require("express").Router()
const courseController = require("../app/controller/course.controller")

router.post("/addCourse", courseController.add)
router.get("/showAllCourses", courseController.allCourses)
router.get("/showCourse/:id", courseController.showCourse)
router.patch("/editCourse/:id", courseController.editCourse)
router.delete("/deleteCourse/:id", courseController.deleteCourse)
router.delete("/deleteAllCourses", courseController.deleteAllCourses)

module.exports = router
const courseModel = require("../../database/models/course.model")
const Handler = require("../handler")
class Course {
    static add = async (req, res) => {
        try {
            const courseData = new courseModel(req.body)
            await courseData.save()
            Handler.resHandler(res, 200, true, courseData, "course added")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "added filed")
        }
    }

    static allCourses = async (req, res) => {
        try {

            const allCourses = await courseModel.find()
            Handler.resHandler(res, 200, true, allCourses, "all courses showed")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "show all courses failed")

        }

    }

    static showCourse = async (req, res) => {
        try {
            const courseData = await courseModel.findById(req.params.id)

            Handler.resHandler(res, 200, true, courseData, "course data updated")

        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "course failed to update")

        }
    }

    static editCourse = async (req, res) => {
        try {
            const courseData = await courseModel.findById(req.params.id)
            for (let prop in req.body) {
                courseData[prop] = req.body[prop]
            }
            await courseData.save()
            Handler.resHandler(res, 200, true, courseData, "course data updated")

        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "course failed to update")

        }
    }

    static deleteCourse = async (req, res) => {
        try {
            const courseData = await courseModel.findByIdAndRemove(req.params.id)

            Handler.resHandler(res, 200, true, courseData, "course deleted")

        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "failed to delete course")

        }
    }

    static deleteAllCourses = async (req, res) => {
        try {

            await courseModel.deleteMany()
            Handler.resHandler(res, 200, true, [], "all courses deleted")
        }
        catch (e) {
            Handler.resHandler(res, 500, false, e.message, "failed to delete all courses")

        }

    }


}
module.exports = Course
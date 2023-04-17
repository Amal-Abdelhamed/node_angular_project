const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    img: { // you need to store image as buffer
        type: String,
    },
    instructor: {
        type: String,
        trim: true,
    },
},
    {
        timestamps: true
    }
)

const courseModel = mongoose.model("Course", courseSchema)
module.exports = courseModel

const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    type: {
        type: String,
        trim: true,
        required: true,
        enum: ["admin", "student"]
    },
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
    },
    uid: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: { // later you need to handle it not to store real value (encrypted)
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        trim: true,
        lowercase: true,
        enum: ["male", "female"]
    },
    dateOfBirth: {
        type: Date
    },
    img: { // you need to store image as buffer
        type: String,
    },
    phone: {
        type: String,
        trim: true,
        required: () => this.type == "student",
        validate(value) {
            if (!validator.isMobilePhone(value, 'ar-EG'))
                throw new Error("invalid mobile number")
        }
    }
},
    {
        timestamps: true
    }
)

userSchema.pre("save",async function(){
    this.password = await  bcrypt.hash(this.password,4)
})

const userModel = mongoose.model("User", userSchema)
module.exports = userModel

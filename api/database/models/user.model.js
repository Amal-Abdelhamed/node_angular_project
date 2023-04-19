const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcrypt');
jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    role: {
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
    code: {
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
    },
    courses: [
        {
            course: {
                type: String,
                trim: true,
                required: () => this.type == "student"
            }

        }
    ],
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
},
    {
        timestamps: true
    }
)

userSchema.pre("save", async function () {
    if (this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 4)
})

userSchema.methods.generateToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTKEY)
    this.tokens.push({ token })
    await this.save()
    return token
}

const userModel = mongoose.model("User", userSchema)
module.exports = userModel

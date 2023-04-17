const express = require("express")
const app = express()
require('../database/connection')
const userRouts = require("../routes/user.routes")
const courseRouts = require("../routes/course.routes")
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRouts)
app.use("/api/course", courseRouts)


module.exports = app

const express = require("express")
const app = express()
require('../database/connection')
const userRouts = require("../routes/user.routes")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRouts)



module.exports = app
